import ast
from collections import Counter

from django.http import JsonResponse
from skills.models import Skill

from .models import Posting


def get_skill_counts(request):
    all_codes = []

    # Posting 객체에서 코드 추출
    for posting in Posting.objects.all():
        try:
            job_code_data = ast.literal_eval(posting.job_code)
            codes = job_code_data["code"].split(",")
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

    print(formatted_data)

    return JsonResponse(formatted_data, safe=False)
