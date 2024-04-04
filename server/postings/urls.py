from django.urls import path

from . import views

urlpatterns = [
    path("code-counts/", views.get_code_counts, name="code_counts"),
]
