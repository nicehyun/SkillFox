from collections import Counter

from django.core.management.base import BaseCommand
from django.db.models import Count
from postings.models import Education, Income, Industry, JobType, Posting, Region, Skill


class Command(BaseCommand):
    help = "Aggregate and count skills linked to postings with skill code 92"

    def handle(self, *args, **kwargs):
        # '92' 코드를 포함하는 스킬을 가진 Posting 객체 필터링
        postings_with_skill_92 = Posting.objects.filter(skills__code="92").distinct()

        # 제외할 스킬 코드 목록
        excluded_codes = [
            "82",
            "83",
            "84",
            "86",
            "87",
            "88",
            "89",
            "90",
            "91",
            "92",
            "93",
            "94",
            "95",
            "96",
            "98",
            "100",
            "101",
            "102",
            "118",
            "180",
            "183",
            "2232",
        ]

        # 상위 스킬 코드 목록
        top_skill_codes = [
            skill.code for skill in Skill.objects.order_by("-num_postings")[:50]
        ]

        # 각 포스팅에서 top_skills을 몇 개 포함하는지 집계
        postings_skills_count = Posting.objects.annotate(
            top_skills_count=Count("skills", filter=Q(skills__code__in=top_skill_codes))
        )

        # 산업별로 집계된 값을 저장할 딕셔너리
        industry_counts = defaultdict(int)

        # 각 포스팅별로 반복
        for posting in postings_skills_count:
            # 해당 포스팅의 top_skills 카운트
            top_skills_count = posting.top_skills_count
            # 해당 포스팅과 연결된 모든 산업에 대해 카운트 적용
            for industry in posting.industries.all():
                industry_counts[industry.name] += top_skills_count

        # 산업별 카운트 결과 정렬 및 상위 10개 산업 추출
        top_industries = sorted(
            industry_counts.items(), key=lambda x: x[1], reverse=True
        )[:10]

        # 결과 출력
        for industry, count in top_industries:
            print(f"{industry}: {count}")
