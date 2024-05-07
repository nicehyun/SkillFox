import calendar
import datetime
from collections import Counter

from dateutil.relativedelta import relativedelta
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
    """
    현재 날짜에서 month_delta만큼 이동한 월의 첫 날과 마지막 날을 반환합니다.
    month_delta가 0이면 현재 월, 양수면 미래의 월, 음수면 과거의 월을 나타냅니다.
    """
    today = timezone.now().date()
    first_day_this_month = today.replace(day=1)
    # relativedelta를 사용하여 정확한 월 이동을 계산합니다.
    first_day_target_month = first_day_this_month + relativedelta(months=-month_delta)
    # 해당 월의 마지막 날을 계산하기 위해 calendar.monthrange를 사용합니다.
    _, last_day = calendar.monthrange(
        first_day_target_month.year, first_day_target_month.month
    )
    last_day_target_month = first_day_target_month.replace(day=last_day)

    return first_day_target_month, last_day_target_month


def validate_current_month_postings(postings):
    """현재 월에 데이터가 있는지 확인하고 해당 날짜를 반환합니다."""
    # 현재 월의 시작과 끝 날짜를 가져옵니다.
    first_day_this_month, last_day_this_month = get_start_end_dates(0)
    current_month_postings = postings.filter(
        collection_date__range=(first_day_this_month, last_day_this_month)
    )

    # 현재 월의 데이터가 있는지 검사합니다.
    if current_month_postings.exists():
        return current_month_postings, 0
    else:
        # 현재 월에 데이터가 없는 경우, 최대 12개월 전까지 이전 월을 검사합니다.
        for i in range(1, 12):
            first_day_previous_month, last_day_previous_month = get_start_end_dates(i)
            previous_month_postings = postings.filter(
                collection_date__range=(
                    first_day_previous_month,
                    last_day_previous_month,
                )
            )
            if previous_month_postings.exists():
                return previous_month_postings, i

    # 최종적으로 아무 데이터도 없는 경우
    return postings.none(), 12


def aggregate_top_skills(postings):
    postings, month_delta = validate_current_month_postings(postings)
    skill_counts = Counter()
    for posting in postings:
        skills = posting.skills
        skill_counts.update(skills)
    return skill_counts.most_common(50), month_delta


def get_previous_months_skills_counts(postings, top_skills, month_delta):
    """지정된 기간 동안의 각 스킬의 노출 횟수를 계산하고, 이를 사전으로 반환합니다."""
    previous_months_data = {}
    for i in range(1, 6):  # 이전 5개월을 독립적으로 처리
        month_start, month_end = get_start_end_dates(month_delta + i)
        month_postings = postings.filter(
            collection_date__gte=month_start, collection_date__lte=month_end
        )
        skill_counter = Counter()
        for posting in month_postings:
            skill_counter.update(posting.skills)

        # 해당 월의 모든 top_skills에 대해 결과 저장
        for skill, _ in top_skills:
            skill_key = f"{skill}_{month_start.month}월"
            previous_months_data[skill_key] = skill_counter.get(
                skill, 0
            )  # 없는 경우 0으로 설정

    return previous_months_data


def get_skills_frequency(request):
    filted_postings, error_response = validate_and_filter_postings(request)
    if error_response:
        return error_response

    top_skills, month_delta = aggregate_top_skills(filted_postings)
    previous_months_counts = get_previous_months_skills_counts(
        filted_postings, top_skills, month_delta
    )

    formatted_data = []
    # 월별 데이터 준비
    date_ranges = [get_start_end_dates(month_delta + j) for j in range(6)]
    for skill, count in top_skills:
        months_value = [
            {
                date_ranges[j][0].month: (
                    count
                    if j == 0
                    else previous_months_counts.get(
                        f"{skill}_{date_ranges[j][0].month}월", 0
                    )
                )
            }
            for j in range(6)
        ]

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

    # 날짜 범위 미리 계산
    date_ranges = [get_start_end_dates(j) for j in range(6)]

    for educationValue in unique_educations:
        if educationValue:  # 빈 학력 값은 무시합니다.
            # 해당 education 값을 가진 포스팅을 필터링합니다.
            postings = filted_postings.filter(education=educationValue)

            # 필터링된 포스팅으로부터 상위 스킬을 집계합니다.
            top_skills, month_delta = aggregate_top_skills(postings)

            # 최근 몇 개월간의 스킬 동향을 가져옵니다.
            previous_months_counts = get_previous_months_skills_counts(
                postings, top_skills, month_delta
            )

            # 결과 데이터 구성
            skill_data_list = []
            for skill, count in top_skills:
                months_value = []
                for j in range(6):  # 0은 현재 월, 1-5는 이전 월
                    month_key = date_ranges[j][0].month
                    skill_count = (
                        count
                        if j == 0
                        else previous_months_counts.get(f"{skill}_{month_key}월", 0)
                    )
                    months_value.append({month_key: skill_count})

                skill_data_list.append({"name": skill, "months_value": months_value})

            results.append({"education": educationValue, "data": skill_data_list})

    return JsonResponse(
        {"data": results, "count": filted_postings.count()},
        safe=False,
        status=200,
    )


def get_top_skills_by_region1(request):
    filted_postings, error_response = validate_and_filter_postings(request)
    if error_response:
        return error_response

    # 각 지역별로 고유한 값들을 가져옴
    unique_regions = filted_postings.values_list("region1", flat=True).distinct()

    formatted_data = []
    # 날짜 범위 미리 계산
    date_ranges = [get_start_end_dates(j) for j in range(6)]

    for region in unique_regions:
        if region and region != "No results found":
            postings = filted_postings.filter(region1=region)
            top_skills, month_delta = aggregate_top_skills(postings)
            previous_months_counts = get_previous_months_skills_counts(
                postings, top_skills, month_delta  # 사용 postings으로 정확히 지정
            )

            skill_data_list = []
            for skill, count in top_skills:
                months_value = []
                for j in range(6):  # 0은 현재 월, 1-5는 이전 월
                    month_key = date_ranges[j][0].month
                    skill_count = (
                        count
                        if j == 0
                        else previous_months_counts.get(f"{skill}_{month_key}월", 0)
                    )
                    months_value.append({month_key: skill_count})

                skill_data_list.append({"name": skill, "months_value": months_value})

            # 지역별로 구성된 데이터를 최종 배열에 추가
            formatted_data.append({"region": region, "data": skill_data_list})

    return JsonResponse(
        {"data": formatted_data, "count": filted_postings.count()},
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

    # 날짜 범위 미리 계산
    date_ranges = [get_start_end_dates(j) for j in range(6)]

    top_skills, month_delta = aggregate_top_skills(
        filtered_postings_with_experience_range
    )
    previous_months_counts = get_previous_months_skills_counts(
        filtered_postings_with_experience_range, top_skills, month_delta
    )

    # 집계된 데이터를 리스트로 포맷합니다.
    formatted_data = []
    for skill, count in top_skills:
        months_value = []
        for j in range(6):  # 0은 현재 월, 1-5는 이전 월
            month_key = date_ranges[j][0].month
            skill_count = (
                count
                if j == 0
                else previous_months_counts.get(f"{skill}_{month_key}월", 0)
            )
            months_value.append({month_key: skill_count})

        formatted_data.append({"name": skill, "months_value": months_value})

    # 결과 데이터를 JSON 형식으로 반환합니다.
    return JsonResponse(
        {
            "data": formatted_data,
            "count": filtered_postings_with_experience_range.count(),
        },
        safe=False,
        status=200,
    )
