import ast
from collections import Counter

from django.core.management.base import BaseCommand
from postings.models import Posting


class Command(BaseCommand):
    help = "Count occurrences of each job code number in the Posting model."

    def handle(self, *args, **kwargs):
        all_codes = []

        for posting in Posting.objects.all():
            try:
                # 문자열을 파이썬 딕셔너리로 변환
                job_code_data = ast.literal_eval(posting.job_code)

                # 'code' 키를 사용하여 코드 문자열을 추출하고 콤마로 분리
                codes = job_code_data["code"].split(",")
                all_codes.extend(code.strip() for code in codes if code.strip())
            except ValueError as e:
                self.stdout.write(
                    self.style.ERROR(
                        f"Error parsing job_code for Posting ID {posting.id}: {e}"
                    )
                )
            except KeyError:
                self.stdout.write(
                    self.style.ERROR(
                        f"'code' key not found for Posting ID {posting.id}"
                    )
                )

        # 각 코드 번호의 발생 횟수를 카운트
        code_counts = Counter(all_codes)
