from collections import Counter

from django.http import JsonResponse

from .models import Industry, JobType, Posting, Skill


def get_skill_counts(request):
    all_codes = []

    # Posting 객체에서 코드 추출
    for posting in Posting.objects.all():
        try:
            codes = posting.job_code.split(",")
            all_codes.extend(code.strip() for code in codes if code.strip())
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    matching_names = []

    # 추출된 코드에 해당하는 Skill 이름 찾기
    for code in all_codes:
        try:
            skill = Skill.objects.get(id=int(code))
            matching_names.append(skill.name)
        except Skill.DoesNotExist:
            continue  # 해당 코드에 매칭되는 Skill이 없는 경우 무시
        except ValueError:
            continue  # 코드 형식이 올바르지 않은 경우 무시

    skill_counts = Counter(matching_names)

    # 발생 횟수에 따라 정렬된 결과를 formatted_data에 저장
    formatted_data = [
        {"name": skill, "value": count} for skill, count in skill_counts.most_common()
    ]

    return JsonResponse(formatted_data, safe=False)


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
    all_codes = []

    # Posting 객체에서 job_code 추출
    for posting in Posting.objects.all():
        if posting.job_code:
            codes = posting.job_code.split(",")
            all_codes.extend(code.strip() for code in codes if code.strip())

    skill_counts = Counter(all_codes)

    # 가장 자주 등장하는 상위 30개의 스킬 식별
    top_skills = [skill for skill, count in skill_counts.most_common(30)]

    # top_skills을 기반으로 각 산업별 스킬 출현 빈도 분석
    industry_skill_counts = {}

    for posting in Posting.objects.all():
        industry = posting.industry_id
        if posting.job_code and industry:
            codes = set(
                code.strip()
                for code in posting.job_code.split(",")
                if code.strip() in top_skills
            )
            if industry not in industry_skill_counts:
                industry_skill_counts[industry] = Counter()
            industry_skill_counts[industry].update(codes)

    # 산업별로 top_skills 출현 빈도의 합 계산
    industry_total_matches = {
        industry: sum(counts.values())
        for industry, counts in industry_skill_counts.items()
    }

    # 일치하는 스킬이 가장 많은 상위 5개 산업 추출
    top_industries = sorted(
        industry_total_matches.items(), key=lambda x: x[1], reverse=True
    )[:5]

    # 결과 데이터 포맷팅 및 JSON 응답 반환
    formatted_data = [
        {"name": Industry.objects.get(code=industry).name, "value": total}
        for industry, total in top_industries
    ]

    return JsonResponse(formatted_data, safe=False)


def get_top_skill_by_job_type(request):
    job_type_code_counts = {}

    # Posting 객체에서 job_type을 기준으로 job_code를 집계
    for posting in Posting.objects.all():
        job_types = [jt.strip() for jt in posting.job_type.split(",") if jt.strip()]
        job_codes = [jc.strip() for jc in posting.job_code.split(",") if jc.strip()]

        for job_type in job_types:
            if job_type not in job_type_code_counts:
                job_type_code_counts[job_type] = Counter()
            job_type_code_counts[job_type].update(job_codes)

    # 각 job_type별로 가장 많이 등장하는 상위 10개 job_code 식별
    top_codes_by_job_type = {
        job_type: codes.most_common(10)
        for job_type, codes in job_type_code_counts.items()
    }

    # 결과 포맷팅
    formatted_data = {}

    for job_type, codes in top_codes_by_job_type.items():
        job_type_name = JobType.objects.get(code=job_type).name
        codes_dict = {}
        for code, count in codes:
            try:
                skill_name = Skill.objects.get(pk=code).name
            except Skill.DoesNotExist:
                continue  # 해당 스킬이 존재하지 않으면 넘어간다
            codes_dict[skill_name] = count
        formatted_data[job_type_name] = codes_dict

    # JSON으로 결과 반환
    return JsonResponse(formatted_data)
