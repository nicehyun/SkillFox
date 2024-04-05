from django.urls import path

from . import views

urlpatterns = [
    path("skill-counts/", views.get_skill_counts, name="count_job_skill"),
    path(
        "industry-frequency/",
        views.get_top_industries_based_on_top_skills,
        name="industry_frequency",
    ),
    path(
        "job-type-frequency/",
        views.get_top_skill_by_job_type,
        name="job_type_frequency",
    ),
]
