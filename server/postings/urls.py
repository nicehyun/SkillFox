from django.urls import path

from . import views

urlpatterns = [
    path("skill-frequency/", views.get_skills_frequency, name="skill_frequency"),
    path(
        "industry-frequency/",
        views.get_top_industries_based_on_top_skills,
        name="industry_frequency",
    ),
    path(
        "job-type-frequency/",
        views.get_top_skills_by_jobtype,
        name="job_type_frequency",
    ),
    path(
        "education-frequency/",
        views.get_top_skills_by_education,
        name="education_frequency",
    ),
    path(
        "experience-range-frequency/",
        views.get_top_skills_by_experience_range,
        name="experience_range_frequency",
    ),
    path(
        "region-frequency/",
        views.get_top_skills_by_region,
        name="region_frequency",
    ),
]
