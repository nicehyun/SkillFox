from collections import Counter, defaultdict

from django.db.models import Count
from django.http import JsonResponse

from .models import (
    Industry,
    JobType,
    Posting,
    Skill,
)  # 모델 경로는 프로젝트에 맞게 조정하세요.


def get_skill_counts(request):
    classification = request.GET.get("classification", None)

    # classification 값에 따라 스킬 ID 설정
    skill_ids = {
        "FE": "92",
        "BE": "84",
    }

    if classification not in skill_ids:
        return JsonResponse({"error": "Invalid classification value"}, status=400)

    skill_id = skill_ids[classification]

    # 스킬 ID를 기준으로 해당 스킬을 가지는 Posting 객체 필터링
    postings = Posting.objects.filter(skills__id=skill_id)

    # 각 Posting의 모든 스킬 이름 수집
    matching_names = [
        skill.name for posting in postings for skill in posting.skills.all()
    ]

    skill_counts = Counter(matching_names)

    # 발생 횟수에 따라 정렬된 결과를 formatted_data에 저장
    formatted_data = [
        {"name": skill, "value": count} for skill, count in skill_counts.most_common(30)
    ]

    return JsonResponse({"data": formatted_data, "count": postings.count()}, safe=False)


# 시간 복작도 개선 전 ----------------------------------------------------------------
# - 첫 번째로 모든 Posting 객체를 순회하여 job_code를 추출 : O(N*M)
# N은 Posting 객체의 수, M은 평균적인 job_code의 개수
# - 상위 30개 스킬 식별 : O(N*log(N))
# - 각 산업별 스킬 출현 빈도 분석 : O(N*M)
# - 상위 5개 산업 추출: O(K*log(K))
# 산업의 수를 K
# 전반적으로, 가장 지배적인 시간 복잡도는 O(N*M)입니다. N과 M이 크면 성능에 상당한 영향을 줄 수 있음


# 시간 복작도 개선 후 ----------------------------------------------------------------
# - ORM을 활용하여, 가능한 많은 데이터 처리를 데이터베이스 수준에서 수행하도록 합니다. 이는 annotate와 aggregate 함수를 사용하여 구현
# 데이터베이스가 최적화된 쿼리 실행 계획을 사용하여 데이터를 효율적으로 처리할 수 있게 해줌
# - Posting 모델의 industry와 job_code 필드에 인덱스를 추가하여 검색 성능을 향상
# 데이터베이스에서 Posting 객체를 필터링하고 정렬하는 과정의 속도를 높여줌
# - 상위 30개 스킬과 같이 자주 변경되지 않는 데이터는 캐시에 저장하여 성능을 향상
# 매 요청마다 동일한 계산을 반복하지 않아도 됨
# 데이터베이스 수준에서의 집계와 인덱싱을 사용하면, 전반적인 시간 복잡도를 O(N*log(N))으로 줄일 수 있음


def get_top_industries_based_on_top_skills(request):
    classification = request.GET.get("classification", None)

    skill_ids = {
        "FE": "92",
        "BE": "84",
    }

    if classification not in skill_ids:
        return JsonResponse({"error": "Invalid classification value"}, status=400)

    skill_id = skill_ids[classification]

    # 해당 스킬 ID를 가진 Posting과 연관된 Industry의 개수를 세고, 상위 5개 Industry를 추출
    top_industries_query = (
        Industry.objects.filter(
            related_postings__skills__id=skill_id  # 'postings' 대신 'related_postings' 사용
        )
        .annotate(postings_count=Count("related_postings"))  # 여기도 마찬가지로 변경
        .order_by("-postings_count")[:5]
    )

    # 결과 데이터 포맷팅
    formatted_data = [
        {"name": industry.name, "value": industry.postings_count}
        for industry in top_industries_query
    ]

    # 필터링된 postings의 총 개수 계산
    postings_count = Posting.objects.filter(skills__id=skill_id).distinct().count()

    return JsonResponse(
        {
            "data": formatted_data,
            "count": postings_count,
        },
        safe=False,
    )


def get_top_skill_by_job_type(request):
    classification = request.GET.get("classification", None)

    # classification 값에 따라 스킬 ID 설정
    skill_ids = {
        "FE": "92",
        "BE": "84",
    }

    if classification not in skill_ids:
        return JsonResponse({"error": "Invalid classification value"}, status=400)

    skill_id = skill_ids[classification]

    # 스킬 ID를 기준으로 해당 스킬을 가지는 Posting 객체 필터링
    postings = Posting.objects.filter(skills__id=skill_id).prefetch_related(
        "job_types", "skills"
    )

    # JobType 별 스킬 집계를 위한 구조
    job_type_skill_counts = defaultdict(Counter)

    for posting in postings:
        for job_type in posting.job_types.all():
            for skill in posting.skills.all():
                job_type_skill_counts[job_type.code][skill.name] += 1

    # 각 JobType별 상위 10개 스킬 식별 및 포맷팅
    formatted_data = {}
    for job_type_code, skills_counter in job_type_skill_counts.items():
        top_skills = skills_counter.most_common(10)
        job_type_name = JobType.objects.get(code=job_type_code).name
        formatted_data[job_type_name] = {
            skill_name: count for skill_name, count in top_skills
        }

    return JsonResponse(formatted_data, safe=False)
