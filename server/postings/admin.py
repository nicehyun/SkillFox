from django.contrib import admin

from .models import Education, Income, Industry, JobType, Posting, Region, Skill


# jango Admin을 설정하면, 모델을 등록하여 웹 인터페이스를 통해 데이터베이스 내용을 보고, 수정하고, 삭제 가능
class PostAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "posting_url",
        "company_link",
        "company_name",
        "title",
        "experience_min",
        "experience_max",
        "modification_timestamp",
        # Many to Many relationship
        "get_skills",
        "get_industries",
        "get_job_types",
        "get_regions",
        "get_educations",
        "get_incomes",
    )
    search_fields = ("title", "company_name")

    def get_skills(self, obj):
        return ", ".join([skill.name for skill in obj.skills.all()])

    get_skills.short_description = "Skills"

    def get_industries(self, obj):
        return ", ".join([industry.name for industry in obj.industries.all()])

    get_industries.short_description = "Industries"

    def get_job_types(self, obj):
        return ", ".join([job_type.name for job_type in obj.job_types.all()])

    get_job_types.short_description = "Job Types"

    def get_regions(self, obj):
        return ", ".join([region.name for region in obj.regions.all()])

    get_regions.short_description = "Regions"

    def get_educations(self, obj):
        return ", ".join([education.name for education in obj.educations.all()])

    get_educations.short_description = "Educations"

    def get_incomes(self, obj):
        return ", ".join([income.name for income in obj.incomes.all()])

    get_incomes.short_description = "Incomes"


admin.site.register(Posting, PostAdmin)


# Skill 모델을 관리자 사이트에 등록
class SkillAdmin(admin.ModelAdmin):
    list_display = ("code", "name")
    search_fields = ("name", "code")


admin.site.register(Skill, SkillAdmin)


# Industry 모델을 관리자 사이트에 등록
class IndustryAdmin(admin.ModelAdmin):
    list_display = ("code", "name")
    search_fields = ("name", "code")


admin.site.register(Industry, IndustryAdmin)


# JobType 모델을 관리자 사이트에 등록
class JobTypeAdmin(admin.ModelAdmin):
    list_display = ("code", "name")
    search_fields = ("name", "code")


admin.site.register(JobType, JobTypeAdmin)


class EducationAdmin(admin.ModelAdmin):
    list_display = ("code", "name")
    search_fields = ("name", "code")


admin.site.register(Education, EducationAdmin)


class RegionAdmin(admin.ModelAdmin):
    list_display = ("code", "name")
    search_fields = ("name", "code")


admin.site.register(Region, RegionAdmin)


class IncomeAdmin(admin.ModelAdmin):
    list_display = ("code", "name")
    search_fields = ("name", "code")


admin.site.register(Income, IncomeAdmin)
