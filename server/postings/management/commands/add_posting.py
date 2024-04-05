from datetime import datetime

import requests
from django.core.management.base import BaseCommand
from postings.models import Posting


class Command(BaseCommand):
    help = "Adds job postings from the SaramIn API with pagination"

    def handle(self, *args, **kwargs):
        base_url = "https://oapi.saramin.co.kr/job-search?"
        access_key = "Yioy75kmahFlSMtL4I8keyWUpdTj1QJGtzF1S42SJNJFWfe3ROb"
        keywords = "프론트엔드"
        job_cd = "92"
        start = 1
        count = 110
        max_iterations = 1  # 최대 반복 횟수

        # for _ in range(max_iterations):
        while True:
            # 쿼리 문자열을 구성
            query_params = f"access-key={access_key}&keywords={keywords}&sr=directhire&sort=ua&start={start}&count={count}&job_mid_cd=2&job_cd={job_cd}"
            # 완전한 URL
            url = f"{base_url}{query_params}"
            # 요청 헤더
            headers = {"Accept": "application/json"}

            # GET 요청을 보내고 응답을 받음
            response = requests.get(url, headers=headers)

            # 응답을 JSON 형태로 파싱
            postings = response.json()

            print(postings)
            # 여기서 API 응답으로 count가 0이면 반복문 중단
            if postings["jobs"]["count"] == 0:
                print("No more data to fetch. Stopping.")
                break

            for job in postings["jobs"]["job"]:
                modification_timestamp = datetime.fromtimestamp(
                    int(job["modification-timestamp"])
                )

                # 중복된 값 제거 로직 추가
                job_codes = job["position"]["job-code"]["code"]
                job_codes_unique = ",".join(
                    sorted(
                        set(job_codes.replace(" ", "").split(",")),
                        key=job_codes.split(",").index,
                    )
                )

                Posting.objects.update_or_create(
                    id=job["id"],
                    defaults={
                        "posting_url": job.get("url", None),
                        "company_link": job.get("company", {})
                        .get("detail", {})
                        .get("href", None),
                        "company_name": job.get("company", {})
                        .get("detail", {})
                        .get("name", None),
                        "title": job.get("position", {}).get("title", None),
                        "industry_id": job.get("position", {})
                        .get("industry", {})
                        .get("code", None),
                        "location": job.get("position", {})
                        .get("location", {})
                        .get("name", None),
                        "job_type": job.get("position", {})
                        .get("job-type", {})
                        .get("code", None),
                        "job_code": job_codes_unique,  # 중복 제거 로직 결과
                        "experience_min": job.get("position", {})
                        .get("experience-level", {})
                        .get("min", None),
                        "experience_max": job.get("position", {})
                        .get("experience-level", {})
                        .get("max", None),
                        "education_level": job.get("position", {})
                        .get("required-education-level", {})
                        .get("code", None),
                        "modification_timestamp": modification_timestamp,  # datetime 변환 로직 결과
                        "salary": job.get("salary", {}).get("code", None),
                        "job_group": "FE",  # 고정 값
                    },
                )

            self.stdout.write(
                self.style.SUCCESS(
                    f"Page {start} successfully added/updated job postings."
                )
            )

            # 다음 페이지로 start 업데이트
            start += 1
