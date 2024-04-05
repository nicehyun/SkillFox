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

    location = models.CharField(max_length=255, null=True, blank=True)

    experience_min = models.IntegerField(null=True, blank=True)
    experience_max = models.IntegerField(null=True, blank=True)
    education_level = models.CharField(max_length=255, null=True, blank=True)
    modification_timestamp = models.DateTimeField(null=True, blank=True)
    salary = models.CharField(max_length=255, null=True, blank=True)
    # Many to Many relationship
    skills = models.ManyToManyField("Skill", related_name="postings", blank=True)
    industries = models.ManyToManyField(
        "Industry", related_name="related_postings", blank=True
    )
    job_types = models.ManyToManyField("JobType", related_name="postings", blank=True)
