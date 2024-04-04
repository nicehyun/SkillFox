from django.db import models


# posting data model
class Posting(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    posting_url = models.URLField(blank=True, null=True)
    company_link = models.URLField(blank=True, null=True)
    company_name = models.CharField(max_length=255, null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    industry = models.CharField(max_length=255, null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    job_type = models.CharField(max_length=255, null=True, blank=True)
    job_code = models.TextField(null=True, blank=True)
    experience_min = models.IntegerField(null=True, blank=True)
    experience_max = models.IntegerField(null=True, blank=True)
    education_level = models.CharField(max_length=255, null=True, blank=True)
    modification_timestamp = models.DateTimeField(null=True, blank=True)
    salary = models.CharField(max_length=255, null=True, blank=True)
    job_group = models.CharField(max_length=10, null=True, blank=True)
