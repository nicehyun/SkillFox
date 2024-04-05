from django.db import models


class Skill(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Industry(models.Model):
    code = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=255, null=True, blank=True)


class JobType(models.Model):
    code = models.CharField(max_length=10, primary_key=True)
    name = models.CharField(max_length=255, null=True, blank=True)


# posting data model
class Posting(models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    posting_url = models.URLField(blank=True, null=True)
    company_link = models.URLField(blank=True, null=True)
    company_name = models.CharField(max_length=255, null=True, blank=True)
    title = models.CharField(max_length=255, null=True, blank=True)
    industry = models.ForeignKey(
        Industry,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="postings",
        db_index=True,
    )
    location = models.CharField(max_length=255, null=True, blank=True)
    job_type = models.CharField(max_length=255, null=True, blank=True)
    job_code = models.TextField(null=True, blank=True)
    experience_min = models.IntegerField(null=True, blank=True)
    experience_max = models.IntegerField(null=True, blank=True)
    education_level = models.CharField(max_length=255, null=True, blank=True)
    modification_timestamp = models.DateTimeField(null=True, blank=True)
    salary = models.CharField(max_length=255, null=True, blank=True)
    job_group = models.CharField(max_length=10, null=True, blank=True)
