from collections import Counter

from django.db.models import Q
from django.http import JsonResponse
from postings.constants import CLASSIFICATION

from .models import JobPosting

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
    if classification not in CLASSIFICATION:
        return JsonResponse({"error": "분류 값이 유효하지 않습니다."}, status=400)
    return classification


def filter_postings_by_classification(classificationValue):
    """classification를 기준으로 JobPosting을 필터링"""
    postings_with_classification = JobPosting.objects.filter(
        classification=classificationValue
    )

    print(postings_with_classification)
    return postings_with_classification


def validate_and_filter_postings(request):
    """
    classification 유효성 검사, classification를 기준으로 포스팅을 필터링
    """
    classification = validate_classification(request)

    if isinstance(classification, JsonResponse):
        return None, classification

    filted_postings = filter_postings_by_classification(classification)

    return filted_postings, None


def aggregate_top_skills(postings):
    """상위 스킬을 집계하여 스킬 이름과 카운트를 딕셔너리 리스트로 반환합니다."""

    skill_counts = Counter()

    for posting in postings:
        skills = posting.skills
        skill_counts.update(skills)

    # 최종적으로 상위 50개 스킬만 반환 (예시로 50개 제한을 둔 경우)
    return skill_counts.most_common(50)


def get_skills_frequency(request):
    filted_postings, error_response = validate_and_filter_postings(request)
    if error_response:
        return error_response

    skills_with_counts = aggregate_top_skills(filted_postings)

    formatted_data = [
        {"name": skill[0], "value": skill[1]} for skill in skills_with_counts
    ]

    return JsonResponse(
        {"data": formatted_data, "count": filted_postings.count()},
        safe=False,
        status=200,
    )


def get_top_skills_by_education(request):
    filted_postings, error_response = validate_and_filter_postings(request)
    if error_response:
        return error_response

    # JobPosting 모델에서 모든 유니크한 'education' 값을 가져옵니다.
    unique_educations = filted_postings.values_list("education", flat=True).distinct()

    # 결과를 담을 리스트 초기화
    results = []

    for educationValue in unique_educations:
        if educationValue:  # 빈 학력 값은 무시합니다.
            # 해당 education 값을 가진 포스팅을 필터링합니다.
            postings = filted_postings.filter(education=educationValue)

            # 필터링된 포스팅으로부터 상위 스킬을 집계합니다.
            top_skills = aggregate_top_skills(postings)

            # 결과를 리스트에 추가합니다.
            results.append(
                {
                    "education": educationValue,
                    "skills": [
                        {"name": skill, "value": count} for skill, count in top_skills
                    ],
                }
            )

    return JsonResponse(
        {"data": results, "count": filted_postings.count()},
        safe=False,
        status=200,
    )


def get_top_skills_by_region1(request):
    filted_postings, error_response = validate_and_filter_postings(request)
    if error_response:
        return error_response

    unique_educations = filted_postings.values_list("region1", flat=True).distinct()

    # 결과를 담을 리스트 초기화
    results = []

    for regionValue in unique_educations:
        if regionValue and regionValue != "No results found":

            postings = filted_postings.filter(region1=regionValue)

            top_skills = aggregate_top_skills(postings)

            results.append(
                {
                    "region": regionValue,
                    "skills": [
                        {"name": skill, "value": count} for skill, count in top_skills
                    ],
                }
            )

    return JsonResponse(
        {"data": results, "count": filted_postings.count()},
        safe=False,
        status=200,
    )


def get_top_skills_by_experience_range(request):
    filted_postings, error_response = validate_and_filter_postings(request)
    if error_response:
        return error_response

    experience_min = request.GET.get("experience-min", "").strip()
    experience_max = request.GET.get("experience-max", "").strip()

    # 값이 빈 문자열이거나 숫자가 아니면 기본값 설정
    experience_min = int(experience_min) if experience_min.isdigit() else 0
    experience_max = int(experience_max) if experience_max.isdigit() else 30

    print(f"experience_min : {experience_min}")
    print(f"experience_max : {experience_max}")

    # 경험치에 따른 포스팅 필터링
    filtered_postings_with_experience_range = filted_postings.filter(
        Q(experience_min__gte=experience_min) & Q(experience_max__lte=experience_max)
    )

    skills_with_counts = aggregate_top_skills(filtered_postings_with_experience_range)

    # 집계된 데이터를 리스트로 포맷합니다.
    formatted_data = [
        {"name": skill[0], "value": skill[1]} for skill in skills_with_counts
    ]

    # 결과 데이터를 JSON 형식으로 반환합니다.
    return JsonResponse(
        {
            "data": formatted_data,
            "count": filtered_postings_with_experience_range.count(),
        },
        safe=False,
        status=200,
    )
