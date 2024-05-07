import json
import os
import re
import time

import environ
import requests
from bs4 import BeautifulSoup, NavigableString
from django.core.management.base import BaseCommand
from django.utils import timezone
from postings.models import JobPosting
from selenium import webdriver
from selenium.webdriver.common.by import By


# JobPosting.objects.all().delete()
class Command(BaseCommand):
    help = "Crawl a website and extract information."

    def handle(self, *args, **options):
        self.stdout.write(
            self.style.SUCCESS("Starting the browser and fetching links...")
        )

        keyword = "데이터분석"
        classification = "DA"
        links = self.fetch_links_with_scroll(keyword)

        for url in links:  # 수집한 링크들을 순회
            try:
                page_data = self.parse_page(url)  # 각 링크에서 페이지 데이터 파싱
                self.save_job_posting(
                    page_data, classification
                )  # 파싱된 데이터를 DB에 저장
                self.stdout.write(
                    self.style.SUCCESS(f"Successfully saved data from {url}")
                )
                time.sleep(3)
            except Exception as e:
                self.stdout.write(
                    self.style.ERROR(f"Failed to process {url}: {str(e)}")
                )

    def fetch_links_with_scroll(self, keyword):
        driver = webdriver.Chrome()

        # 타겟 URL

        url = f"https://www.jumpit.co.kr/search?sort=relation&keyword={keyword}"
        driver.get(url)

        # 스크롤 다운 전략 설정
        links_collected = set()
        try:
            last_height = driver.execute_script("return document.body.scrollHeight")
            while True:
                # 모든 지정 클래스의 div 태그 찾기
                div_elements = driver.find_elements(By.CLASS_NAME, "gfaMvI")
                for div in div_elements:
                    a_tags = div.find_elements(By.TAG_NAME, "a")
                    for a in a_tags:
                        href = a.get_attribute("href")

                        if href:
                            links_collected.add(href)

                # 스크롤 다운
                driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
                time.sleep(1)  # 스크롤 사이의 시간 간격 설정

                # 새로운 스크롤 위치 체크
                new_height = driver.execute_script("return document.body.scrollHeight")
                if new_height == last_height:
                    break
                last_height = new_height

        finally:
            driver.quit()

        return list(links_collected)

    def save_job_posting(self, page_data, classification):
        # 새로운 JobPosting 객체 생성
        job_posting = JobPosting(
            skills=page_data["skills"],
            experience_min=page_data["experience"][0],
            experience_max=page_data["experience"][1],
            education=page_data["education"],
            region1=page_data["region"][0],
            region2=page_data["region"][1],
            classification=classification,
            collection_date=timezone.now(),  # 현재 시간을 collection_date로 설정
        )

        # 데이터베이스에 저장
        job_posting.save()
        return job_posting

    def parse_page(self, url):
        html = requests.get(url).text
        soup = BeautifulSoup(html, "html.parser")

        skills = self.extract_skill_stacks(soup)
        experience = self.extract_experience_information(soup)
        education = self.extract_education(soup)
        region = self.extract_region(soup)

        return {
            "skills": skills,
            "experience": experience,
            "education": education,
            "region": region,
        }

    # -------------------------------- 기술 추출
    def extract_skill_stacks(self, soup):
        divs_in_pre = [
            pre.find_all("div")
            for pre in (
                dd.find("pre")
                for dd in soup.find("div", class_="position_info")
                .find("dl")
                .find_all("dd")
            )
            if pre
        ]
        images_descriptions = [
            div.get_text() for div_list in divs_in_pre for div in div_list
        ]

        # "자격요건" dt 태그 찾기
        dt_tag = soup.find("dt", string="자격요건")
        dd_tag = dt_tag.find_next_sibling("dd") if dt_tag else None

        # 자격요건 기술 분리 및 필터링
        # words = re.findall(r"[A-Za-z0-9.]+", dd_tag.text if dd_tag else "")
        # technology_stacks = list(filter(lambda word: word[0].isupper(), words))

        pattern = re.compile(r"\b[A-Z][A-Za-z0-9]*(?:\s+[A-Z][A-Za-z0-9]*)*")
        technology_stacks = pattern.findall(dd_tag.text)

        # 리스트 합치기 및 중복 제거
        lowercase_list1 = [item.lower() for item in images_descriptions]
        lowercase_list2 = [item.lower() for item in technology_stacks]

        combined_unique_list = list(set(lowercase_list1 + lowercase_list2))

        return combined_unique_list

    # -------------------------------- 경력 추출
    def extract_experience_information(self, soup):
        career_info = soup.find("div", class_="fFiqnk")
        career_dt = career_info.find("dt", string="경력")
        career_dd = career_dt.find_next_sibling("dd") if career_dt else None

        for career in career_dd:
            # 경력 범위 추출
            match = re.match(r"(경력 (\d+)~(\d+))|(신입~(\d+))", career)
            if match:
                if match.group(1):  # "경력 3~5" 형식일 경우
                    start_year = int(match.group(2))
                    end_year = int(match.group(3))
                elif match.group(4):  # "신입~10" 형식일 경우
                    start_year = 0
                    end_year = int(match.group(5))

        return [start_year, end_year] if career_dd else "No career info"

    # -------------------------------- 학력 추출
    def extract_education(self, soup):
        education_info = soup.find("div", class_="fFiqnk")
        education_dt = education_info.find("dt", string="학력")
        education_dd = education_dt.find_next_sibling("dd") if education_dt else None

        return (
            education_dd.get_text(strip=True) if education_dd else "No education info"
        )

    # -------------------------------- 지역 추출
    def extract_region(self, soup):
        region_info = soup.find("div", class_="fFiqnk")
        region_dt = region_info.find("dt", string="근무지역")
        region_dd = region_dt.find_next_sibling("dd") if region_dt else None
        if region_dd:
            # dd 태그 내부의 모든 div 태그를 찾아 제거
            for div in region_dd.find_all("div"):
                div.decompose()
            # 이제 div 태그가 제거된 상태에서 dd 태그의 텍스트를 추출
            return self.extract_top_and_second_level_region(
                region_dd.get_text(strip=True)
            )
        else:
            return "No region info"

    secret_file = "/Users/sh/Desktop/skill_fox/server/secret.json"

    # secret.json 파일에서 API 키를 로드하는 함수
    def load_api_key(secret_file_path):
        with open(secret_file_path) as f:
            secrets = json.loads(f.read())
            return secrets.get("KAKAO_API_SECRET_KEY")

    # KAKAO API 키를 메모리에 로드
    KAKAO_API_KEY = load_api_key(secret_file)

    # -------------------------------- 지역 변환
    def extract_top_and_second_level_region(self, address):
        env = environ.Env()
        root = environ.Path(__file__) - 2
        environ.Env.read_env(env_file=root(".env"))
        KAKAO_API_SECRET_KEY = env(
            "KAKAO_API_SECRET_KEY", default=os.getenv("KAKAO_API_SECRET_KEY")
        )

        simplified_address = " ".join(address.split()[:4])
        # geopy의 Nominatim 객체 생성
        url = "https://dapi.kakao.com/v2/local/search/address.json"  # 요청할 url 주소
        headers = {"Authorization": "KakaoAK {}".format(self.KAKAO_API_SECRET_KEY)}

        query = {"query": simplified_address}
        response = requests.get(url, headers=headers, params=query)

        if response.status_code == 200:
            result = response.json()  # 카카오 API 응답
            if result["documents"]:  # 결과가 있는 경우
                # 첫 번째 문서에서 지역명 추출
                address_info = result["documents"][0]["road_address"]

                region_1depth_name = address_info["region_1depth_name"]
                region_2depth_name = address_info["region_2depth_name"]
                return [region_1depth_name, region_2depth_name]
            else:
                return "No results found", "No results found"
        else:
            return f"Error: {response.status_code}", f"Error: {response.status_code}"
