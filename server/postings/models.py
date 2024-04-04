from django.db import models


# posting data model
class Posting(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    posting_url = models.URLField(blank=True, null=True)
    company_link = models.URLField(blank=True, null=True)
    company_name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    industry = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    job_type = models.CharField(max_length=255)
    job_code = models.TextField()
    experience_min = models.IntegerField()
    experience_max = models.IntegerField()
    education_level = models.CharField(max_length=255)
    modification_timestamp = models.DateTimeField()
    salary = models.CharField(max_length=255)
