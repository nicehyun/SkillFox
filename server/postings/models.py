from django.db import models


class JobPosting(models.Model):
    skills = models.JSONField(default=list, blank=True)  # skills를 JSON 형태로 저장
    experience_min = models.IntegerField(null=True, blank=True)
    experience_max = models.IntegerField(null=True, blank=True)
    education = models.CharField(max_length=200, blank=True)
    region1 = models.CharField(max_length=100, blank=True)
    region2 = models.CharField(max_length=100, blank=True)
    classification = models.CharField(max_length=100, blank=True)
    collection_date = models.DateTimeField(auto_now_add=True)
