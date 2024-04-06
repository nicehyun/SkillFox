from datetime import datetime

import requests
from django.core.management.base import BaseCommand
from postings.models import Education, Income, Industry, JobType, Posting, Region, Skill


def is_valid_industry_code(industry_code):
    """산업 코드의 유효성을 검사합니다."""
    return Industry.objects.filter(code=industry_code).exists()


class Command(BaseCommand):
    help = "Adds job postings from the SaramIn API with pagination"

    def add_many_to_many_relations(self, model, codes, posting_relation):
        """다대다 관계를 추가하는 범용 함수"""
        for code in codes.split(","):
            code = code.strip()
            try:
                instance = model.objects.get(code=code)
                posting_relation.add(instance)
            except model.DoesNotExist:
                continue

    def handle(self, *args, **kwargs):
        base_url = "https://oapi.saramin.co.kr/job-search?"
        access_key = "Yioy75kmahFlSMtL4I8keyWUpdTj1QJGtzF1S42SJNJFWfe3ROb"
        start = 1
        count = 110

        while True:
            query_params = f"access-key={access_key}&sr=directhire&sort=ud&start={start}&count={count}&job_mid_cd=2"
            url = f"{base_url}{query_params}"
            headers = {"Accept": "application/json"}
            response = requests.get(url, headers=headers)
            postings = response.json()

            if postings["jobs"]["count"] == 0:
                print("No more data to fetch. Stopping.")
                break

            for job in postings["jobs"]["job"]:
                modification_timestamp = datetime.fromtimestamp(
                    int(job["modification-timestamp"])
                )

                posting, created = Posting.objects.update_or_create(
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
                        "experience_min": job.get("position", {})
                        .get("experience-level", {})
                        .get("min", None),
                        "experience_max": job.get("position", {})
                        .get("experience-level", {})
                        .get("max", None),
                        "modification_timestamp": modification_timestamp,
                    },
                )

                # 다대다 관계 처리
                self.add_many_to_many_relations(
                    Industry,
                    job.get("position", {}).get("industry", {}).get("code", ""),
                    posting.industries,
                )
                self.add_many_to_many_relations(
                    Skill,
                    job.get("position", {}).get("job-code", {}).get("code", ""),
                    posting.skills,
                )
                self.add_many_to_many_relations(
                    JobType,
                    job.get("position", {}).get("job-type", {}).get("code", ""),
                    posting.job_types,
                )
                self.add_many_to_many_relations(
                    Region,
                    job.get("position", {}).get("location", {}).get("code", ""),
                    posting.regions,
                )
                self.add_many_to_many_relations(
                    Education,
                    job.get("position", {})
                    .get("required-education-level", {})
                    .get("code", ""),
                    posting.educations,
                )
                self.add_many_to_many_relations(
                    Income, job.get("salary", {}).get("code", ""), posting.incomes
                )

                self.stdout.write(
                    self.style.SUCCESS(
                        f"Page {start} successfully added/updated job postings."
                    )
                )

            start += 1
