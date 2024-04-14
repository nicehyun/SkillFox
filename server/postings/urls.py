from django.urls import path

from . import views

urlpatterns = [
    path("skill-frequency/", views.get_skills_frequency, name="skill_frequency"),
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
        "region1-frequency/",
        views.get_top_skills_by_region1,
        name="region1_frequency",
    ),
]
