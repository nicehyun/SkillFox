from django.urls import path

from . import views

urlpatterns = [
    path("skill-counts/", views.get_skill_counts, name="count_job_skill"),
]
