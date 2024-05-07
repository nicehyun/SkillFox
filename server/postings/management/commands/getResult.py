from collections import Counter

from django.core.management.base import BaseCommand
from postings.models import Industry, JobType, Posting, Skill


class Command(BaseCommand):
    help = "Aggregate top 10 job codes by job type and convert to names"

    def handle(self, *args, **kwargs):
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

        # 결과 포맷팅 및 출력
        formatted_data = {}

        for job_type, codes in top_codes_by_job_type.items():
            job_type_name = JobType.objects.get(code=job_type).name
            codes_dict = {}
            for code, count in codes:
                try:
                    skill_name = Skill.objects.get(pk=code).name  # pk를 사용하여 조회
                except Skill.DoesNotExist:
                    skill_name = "Unknown Skill"  # 해당 id를 가진 Skill이 없는 경우
                codes_dict[skill_name] = count
            formatted_data[job_type_name] = codes_dict

        # 결과 출력 (여기서는 콘솔에 출력하고 있으나, 필요에 따라 다른 형태로 저장하거나 반환할 수 있음)
        self.stdout.write(self.style.SUCCESS(str(formatted_data)))
