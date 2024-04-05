from collections import Counter

from django.core.management.base import BaseCommand
from postings.models import Industry, JobType, Posting, Skill


class Command(BaseCommand):
    help = "Adds data into the skills database"

    def handle(self, *args, **kwargs):
        # 데이터 적재 로직
        skills_data = [
            {"code": 1, "name": "정규직"},
            {"code": 2, "name": "계약직"},
            {"code": 3, "name": "병역특례"},
            {"code": 4, "name": "인턴직"},
            {"code": 5, "name": "아르바이트"},
            {"code": 6, "name": "파견직"},
            {"code": 7, "name": "해외취업"},
            {"code": 8, "name": "위촉직"},
            {"code": 9, "name": "프리랜서"},
            {"code": 10, "name": "계약직 (정규직 전환가능)"},
            {"code": 11, "name": "인턴직 (정규직 전환가능)"},
            {"code": 12, "name": "교육생"},
            {"code": 13, "name": "별정직"},
            {"code": 14, "name": "파트"},
            {"code": 15, "name": "전임"},
            {"code": 16, "name": "기간제"},
            {"code": 17, "name": "무기계약직"},
            {"code": 18, "name": "전문계약직"},
            {"code": 19, "name": "전문연구요원"},
            {"code": 20, "name": "산업기능요원"},
            {"code": 21, "name": "현역"},
            {"code": 22, "name": "보충역"},
        ]

        for skill_data in skills_data:
            # 기존에 동일한 name을 가진 Skill 객체가 있는지 확인
            skill, created = JobType.objects.get_or_create(
                name=skill_data["name"],
                defaults={"code": skill_data["code"]},  # id 필드를 사용하는 경우
            )
            # Skill이 새로 생성되었으면 메시지를 출력
            if created:
                self.stdout.write(self.style.SUCCESS(f"Skill {skill.name} added"))
            else:
                self.stdout.write(
                    self.style.WARNING(f"Skill {skill.name} already exists")
                )

        self.stdout.write(
            self.style.SUCCESS("Successfully loaded all skills into the database.")
        )
