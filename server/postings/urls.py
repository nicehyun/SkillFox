from django.urls import path

from . import views

urlpatterns = [
    path("skill-frequency/", views.get_skill_counts, name="skill_frequency"),
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
