import ast
from collections import Counter

from django.http import JsonResponse

from .models import Posting


def get_code_counts(request):
    all_codes = []

    for posting in Posting.objects.all():
        try:
            job_code_data = ast.literal_eval(posting.job_code)
            codes = job_code_data["code"].split(",")
            all_codes.extend(code.strip() for code in codes if code.strip())
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    code_counts = Counter(all_codes)

    return JsonResponse(dict(code_counts))
