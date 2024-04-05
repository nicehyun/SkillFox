from collections import Counter

from django.core.management.base import BaseCommand
from django.db import transaction
from postings.models import Industry, JobType, Posting, Skill


class Command(BaseCommand):
    help = "Check JobType relations of a specific Posting instance by ID"

    def add_arguments(self, parser):
        parser.add_argument(
            "posting_id", type=int, help="The ID of the Posting to check"
        )

    def handle(self, *args, **options):
        posting_id = options["posting_id"]
        try:
            posting = Posting.objects.get(id=posting_id)
            self.stdout.write(self.style.SUCCESS(f"Checking Posting: {posting.id}"))

            # 연결된 JobType 객체들을 출력합니다.
            job_types = posting.job_types.all()
            if job_types:
                self.stdout.write(self.style.SUCCESS("JobTypes:"))
                for job_type in job_types:
                    self.stdout.write(f" - {job_type.name}")
            else:
                self.stdout.write(
                    self.style.WARNING("No JobTypes connected to this posting.")
                )
        except Posting.DoesNotExist:
            self.stdout.write(
                self.style.ERROR(f"Posting with ID {posting_id} does not exist.")
            )


# class Command(BaseCommand):
#     help = "Migrates Posting job_type string data to JobType ManyToManyField"

#     @transaction.atomic
#     def handle(self, *args, **options):
#         for posting in Posting.objects.all():
#             job_type_codes = posting.job_type.split(",") if posting.job_type else []
#             for code in job_type_codes:
#                 code = code.strip()
#                 if not code:
#                     continue
#                 job_type, created = JobType.objects.get_or_create(code=code)
#                 posting.job_types.add(job_type)
#             posting.job_type = ""  # Clear the old job_type string field if needed
#             posting.save()
