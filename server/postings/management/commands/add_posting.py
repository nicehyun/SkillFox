from datetime import datetime

import requests
from django.core.management.base import BaseCommand
from postings.models import Posting


# TODO : 반복문으로 데이터 저장안됨. 수동으로 테스트 해보기
class Command(BaseCommand):
    help = "Adds job postings from an SaramIn API"

    def handle(self, *args, **kwargs):
        base_url = "https://oapi.saramin.co.kr/job-search?"
        # 요청 변수는 access-key
        access_key = "Yioy75kmahFlSMtL4I8keyWUpdTj1QJGtzF1S42SJNJFWfe3ROb"
        keywords = "프론트엔드"
        # 모든 채용 공고
        bbs_gb = ""
        # 헤드헌팅/파견업체 공고 제외
        sr = "directhire"
        # 근무 형태 전체
        job_type = ""
        # 학력 조건 전체
        edu_lv = ""
        fields = "posting-date+expiration-date+keyword-code+count"
        # 공고 수
        count = "1"
        # 상위 직무 it개발•데이터
        job_mid_cd = "2"
        # 수정일 검색 최소값
        updated_min = "2024-01-01 00:00:00"
        # 수정일 검색 최대값
        updated_max = "2024-04-03 23:59:59"
        # 최근 수정일 기준 sort
        sort = "ud"
        # pagination
        start = 1
        # count (max : 110)
        count = "110"

        # &updated_min={updated_min}&published_max={updated_max}
        # while True:

        # 쿼리 문자열을 구성
        query_params = f"access-key={access_key}&keywords={keywords}&bbs_gb={bbs_gb}&sr={sr}&job_type={job_type}&edu_lv={edu_lv}&fields={fields}&sort={sort}&start={start}&count={count}&job_mid_cd={job_mid_cd}"

        # 완전한 URL
        url = f"{base_url}{query_params}"
        # 요청 헤더
        headers = {"Accept": "application/json"}

        # GET 요청을 보내고 응답을 받음
        response = requests.get(
            url,
            headers=headers,
        )

        # 응답을 JSON 형태로 파싱
        postings = response.json()  # 응답 데이터를 JSON으로 파싱

        for job in postings["jobs"]["job"]:
            modification_timestamp = datetime.fromtimestamp(
                int(job["modification-timestamp"])
            )

            print(job["id"])

            # 레코드 검색: 먼저 Posting 모델에서 id 필드 값이 job["id"]와 일치하는 레코드를 검색합니다.
            # 업데이트 또는 생성:
            # 레코드가 존재하는 경우: 이미 데이터베이스에 해당 id를 가진 레코드가 있으면, defaults 사전에 지정된 필드 값들로 해당 레코드를 업데이트합니다. 이 경우, modification_timestamp 필드도 변환된 datetime 객체로 업데이트됩니다.
            # 레코드가 존재하지 않는 경우: 해당 id를 가진 레코드가 데이터베이스에 없으면, 새로운 레코드를 생성하고, id 및 defaults에 명시된 모든 필드 값들로 새 레코드를 초기화합니다.
            Posting.objects.update_or_create(
                id=job["id"],
                defaults={
                    "posting_url": job["url"],
                    # .get() 메서드를 사용하여 company_link가 없는 경우 None을 반환하도록 함
                    "company_link": job["company"]["detail"].get("href", None),
                    "company_name": job["company"]["detail"]["name"],
                    "title": job["position"]["title"],
                    "industry": job["position"]["industry"]["code"],
                    "location": job["position"]["location"]["name"],
                    "job_type": job["position"]["job-type"]["code"],
                    "job_code": job["position"]["job-code"]["code"],
                    "experience_min": job["position"]["experience-level"]["min"],
                    "experience_max": job["position"]["experience-level"]["max"],
                    "education_level": job["position"]["required-education-level"][
                        "code"
                    ],
                    "modification_timestamp": modification_timestamp,
                    "salary": job["salary"]["code"],
                },
            )

        self.stdout.write(
            self.style.SUCCESS(f"Page {start} successfully added/updated job postings.")
        )
        # 다음 페이지로 start 업데이트
        start += int(count)
