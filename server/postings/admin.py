from django.contrib import admin

from .models import JobPosting


# JobPosting 모델을 위한 Admin 클래스
class JobPostingAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "skills",
        "experience_min",
        "experience_max",
        "education",
        "region1",
        "region2",
        "classification",
        "collection_date",
    )
    search_fields = (
        "id",
        "skills",
        "experience_min",
        "experience_max",
        "education",
        "region1",
        "region2",
        "classification",
    )

    # JSONField 내용을 보기 좋게 표시하기 위한 메소드
    def formatted_skills(self, obj):
        # 스킬이 리스트 형태로 저장된 JSONField를 처리
        return ", ".join(obj.skills)

    formatted_skills.short_description = "Skills"  # 컬럼 헤더명 설정


# JobPosting 모델을 관리자 페이지에 등록
admin.site.register(JobPosting, JobPostingAdmin)
