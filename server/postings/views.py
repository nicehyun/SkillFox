from collections import Counter, defaultdict

from django.db.models import Count, Q
from django.http import JsonResponse
from postings.constants import EXCLUDED_CODES, SKILL_IDS

from .models import Education, Industry, JobType, Posting, Region, Skill

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


def validate_classification(request):
    """classification 유효성 검사"""
    classification = request.GET.get("classification", None)
    if classification not in SKILL_IDS:
        return JsonResponse({"error": "분류 값이 유효하지 않습니다."}, status=400)
    return classification


def filter_postings_by_skill(classification):
    """classification를 기준으로 포스팅을 필터링"""
    skill_code = SKILL_IDS.get(classification)
    if skill_code:
        postings_with_skill = Posting.objects.filter(skills__code=skill_code).distinct()
        return postings_with_skill
    else:
        return Posting.objects.none()  # 일치하는 스킬 코드가 없으면 빈 쿼리셋 반환


def validate_and_filter_postings(request):
    """
    classification 유효성 검사, classification를 기준으로 포스팅을 필터링
    """
    classification = request.GET.get("classification", None)
    if classification not in SKILL_IDS:
        return None, JsonResponse({"error": "분류 값이 유효하지 않습니다."}, status=400)

    skill_code = SKILL_IDS[classification]
    postings_with_skill = Posting.objects.filter(skills__code=skill_code).distinct()
    return postings_with_skill, None


def aggregate_top_skills(postings_with_skill):
    """상위 스킬을 집계"""
    skills_with_counts = (
        Skill.objects.filter(postings__in=postings_with_skill)
        .exclude(code__in=EXCLUDED_CODES)
        .annotate(num_postings=Count("postings"))
        .order_by("-num_postings")[:50]
    )
    return skills_with_counts


def get_skills_frequency(request):
    postings_with_skill, error_response = validate_and_filter_postings(request)
    if error_response:
        return error_response

    skills_with_counts = aggregate_top_skills(postings_with_skill)

    formatted_data = [
        {"name": skill.name, "value": skill.num_postings}
        for skill in skills_with_counts
    ]

    return JsonResponse(
        {"data": formatted_data, "count": postings_with_skill.count()},
        safe=False,
        status=200,
    )


def get_top_industries_based_on_top_skills(request):
    postings_with_skill, error_response = validate_and_filter_postings(request)
    if error_response:
        return error_response

    skills_with_counts = aggregate_top_skills(postings_with_skill)

    # 상위 스킬 코드 목록
    top_skill_codes = [skill.code for skill in skills_with_counts]

    # 각 산업별로 해당 스킬을 포함하는 포스팅 수 집계
    industry_counts = defaultdict(int)
    for posting in postings_with_skill:
        # 각 포스팅에서 상위 스킬에 해당하는 스킬의 수를 계산
        posting_top_skill_count = posting.skills.filter(
            code__in=top_skill_codes
        ).count()
        # 포스팅의 각 산업에 대해 스킬 수만큼 점수를 추가
        for industry in posting.industries.all():
            industry_counts[industry.name] += posting_top_skill_count

    # 상위 10개 산업 선택
    top_industries = sorted(industry_counts.items(), key=lambda x: x[1], reverse=True)[
        :10
    ]

    # 응답 데이터 형식
    formatted_data = [
        {"name": industry, "value": count} for industry, count in top_industries
    ]

    return JsonResponse(
        {"data": formatted_data, "count": postings_with_skill.count()}, safe=False
    )


def get_top_skills_by_jobtype(request):
    postings_with_skill, error_response = validate_and_filter_postings(request)
    if error_response:
        return error_response
    excluded_jobtype_names = ["1"]
    excluded_skill_names = ["프론트엔드"]

    jobtype_skills = {}
    for jobtype in JobType.objects.exclude(name__in=excluded_jobtype_names):
        postings = postings_with_skill.filter(job_types=jobtype)

        # skill_counts 쿼리셋에서 빈 값과 특정 스킬 이름을 제외하고 카운트
        skill_counts = (
            Skill.objects.filter(postings__in=postings)
            .exclude(name__in=excluded_skill_names)
            .annotate(num_postings=Count("postings"))
            .order_by("-num_postings")[:10]
        )

        # jobtype_skills 딕셔너리에 결과 추가
        jobtype_skills[jobtype.name] = [
            {"name": skill.name, "value": skill.num_postings} for skill in skill_counts
        ]

    return JsonResponse(
        {"data": jobtype_skills, "count": postings_with_skill.count()},
        safe=False,
        status=200,
    )


def get_top_skills_by_education(request):
    postings_with_skill, error_response = validate_and_filter_postings(request)
    if error_response:
        return error_response

    excluded_skill_names = ["프론트엔드"]

    education_skills = {}
    for education in Education.objects.all():
        postings = postings_with_skill.filter(educations=education)

        skill_counts = (
            Skill.objects.filter(postings__in=postings)
            .exclude(name__in=excluded_skill_names)
            .annotate(num_postings=Count("postings"))
            .order_by("-num_postings")[:10]
        )

        education_skills[education.name] = [
            {"name": skill.name, "value": skill.num_postings} for skill in skill_counts
        ]

    return JsonResponse(
        {"data": education_skills, "count": postings_with_skill.count()},
        safe=False,
        status=200,
    )


def get_top_skills_by_experience_range(request):
    postings_with_skill, error_response = validate_and_filter_postings(request)
    if error_response:
        return error_response

    # 프론트에서 전달받은 experience_min과 experience_max 값을 불러옵니다.
    experience_min = request.GET.get("experience_min", None)
    experience_max = request.GET.get("experience_max", None)

    # 경험치 범위에 따른 추가 필터링을 적용합니다.
    if experience_min and experience_max:
        filted_postings_with_experience_range = postings_with_skill.filter(
            Q(experience_min__gte=experience_min)
            & Q(experience_max__lte=experience_max)
        )

    # 필터링된 포스팅에서 사용된 스킬들을 집계합니다.
    skill_counts = (
        Skill.objects.filter(postings__in=filted_postings_with_experience_range)
        .annotate(num_postings=Count("postings"))
        .order_by("-num_postings")[:10]
    )

    # 집계된 데이터를 리스트로 포맷합니다.
    formatted_data = [
        {"name": skill.name, "count": skill.num_postings} for skill in skill_counts
    ]

    # 결과 데이터를 JSON 형식으로 반환합니다.
    return JsonResponse(
        {"data": formatted_data, "count": postings_with_skill.count()},
        safe=False,
        status=200,
    )


# TODO : 구현 계획 세우기
def get_top_skills_by_region(request):
    postings_with_skill, error_response = validate_and_filter_postings(request)
    if error_response:
        return error_response

    linked_regions = Region.objects.filter(postings__in=postings_with_skill).distinct()

    region_skills = {}
    for region in linked_regions:
        postings = postings_with_skill.filter(regions=region)

        skill_counts = (
            Skill.objects.filter(postings__in=postings)
            .annotate(num_postings=Count("postings"))
            .order_by("-num_postings")[:10]
        )

        region_skills[region.name] = [
            {"name": skill.name, "count": skill.num_postings} for skill in skill_counts
        ]

    return JsonResponse(
        {"data": region_skills, "count": postings_with_skill.count()},
        safe=False,
        status=200,
    )
