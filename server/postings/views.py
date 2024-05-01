import datetime
from collections import Counter

from django.db.models import Q
from django.http import JsonResponse
from django.utils import timezone
from postings.constants import CLASSIFICATION

from .models import JobPosting


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


def get_start_end_dates(month_delta):
    """현재 월 또는 이전 월의 시작과 끝 날짜를 반환합니다."""
    today = timezone.now().date()
    first_day_this_month = today.replace(day=1)
    first_day_target_month = first_day_this_month - datetime.timedelta(
        days=month_delta * 30
    )

    if first_day_target_month.month == 12:
        last_day_target_month = first_day_target_month.replace(day=31)
    else:
        last_day_target_month = (
            first_day_target_month + datetime.timedelta(days=32)
        ).replace(day=1) - datetime.timedelta(days=1)

    return first_day_target_month, last_day_target_month


def validate_current_month_postings(postings):
    """현재 월에 데이터가 있는지 확인하고 해당 날짜를 반환합니다."""
    first_day_this_month, last_day_this_month = get_start_end_dates(0)
    current_month_postings = postings.filter(
        collection_date__range=(first_day_this_month, last_day_this_month)
    )
    if current_month_postings.exists():
        return current_month_postings, 0
    else:
        # 현재 월에 데이터가 없는 경우 이전 월을 검사
        for i in range(1, 12):  # 최대 이전 12개월까지 확인
            first_day_previous_month, last_day_previous_month = get_start_end_dates(i)
            previous_month_postings = postings.filter(
                collection_date__range=(
                    first_day_previous_month,
                    last_day_previous_month,
                )
            )
            if previous_month_postings.exists():
                return previous_month_postings, i
        return postings.none(), 12  # 최종적으로 아무 데이터도 없는 경우


# def aggregate_top_skills(postings):
#     """상위 스킬을 집계하여 스킬 이름과 카운트를 딕셔너리 리스트로 반환합니다."""

#     skill_counts = Counter()

#     for posting in postings:
#         skills = posting.skills
#         skill_counts.update(skills)

#     # 최종적으로 상위 50개 스킬만 반환 (예시로 50개 제한을 둔 경우)
#     return skill_counts.most_common(50)


def aggregate_top_skills(postings):
    postings, month_delta = validate_current_month_postings(postings)
    skill_counts = Counter()
    for posting in postings:
        skills = posting.skills
        skill_counts.update(skills)
    return skill_counts.most_common(50), month_delta


def get_previous_months_skills_counts(postings, top_skills, month_delta):
    """전월에 대한 스킬 노출 횟수를 계산합니다."""
    previous_months_data = {}
    for i in range(1, 6):
        month_start, month_end = get_start_end_dates(month_delta + i)
        monthly_postings = postings.filter(
            collection_date__gte=month_start, collection_date__lte=month_end
        )
        monthly_skill_counts = Counter()
        for posting in monthly_postings:
            skills = posting.skills
            monthly_skill_counts.update(skills)
        for skill, _ in top_skills:
            previous_months_data[f"{skill}_{month_start.month}월"] = (
                monthly_skill_counts[skill]
            )
    return previous_months_data


# def get_skills_frequency(request):
#     filted_postings, error_response = validate_and_filter_postings(request)
#     if error_response:
#         return error_response

#     skills_with_counts = aggregate_top_skills(filted_postings)

#     formatted_data = [
#         {"name": skill[0], "value": skill[1]} for skill in skills_with_counts
#     ]

#     return JsonResponse(
#         {"data": formatted_data, "count": filted_postings.count()},
#         safe=False,
#         status=200,
#     )


def get_skills_frequency(request):
    filted_postings, error_response = validate_and_filter_postings(request)
    if error_response:
        return error_response

    top_skills, month_delta = aggregate_top_skills(filted_postings)
    previous_months_counts = get_previous_months_skills_counts(
        filted_postings, top_skills, month_delta
    )

    formatted_data = []
    for skill, count in top_skills:
        months_value = []
        # 현재 월 포함 이전 4개월의 데이터를 배열로 취합
        for j in range(0, 6):  # 0은 현재 월, 1-4는 이전 월
            month_start, _ = get_start_end_dates(month_delta + j)
            month_key = month_start.month
            if j == 0:
                # 현재 월의 데이터를 skill count 값으로 설정
                months_value.append({month_key: count})
            else:
                # 이전 월의 데이터를 배열 요소로 추가
                months_value.append(
                    {
                        month_key: previous_months_counts.get(
                            f"{skill}_{month_start.month}월", 0
                        )
                    }
                )

        formatted_data.append({"name": skill, "months_value": months_value})

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
