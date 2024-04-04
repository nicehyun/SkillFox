# Generated by Django 5.0.3 on 2024-04-04 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('postings', '0005_remove_posting_company_link_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='posting',
            name='company_link',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='posting',
            name='company_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='posting',
            name='education_level',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='posting',
            name='experience_max',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='posting',
            name='experience_min',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='posting',
            name='industry',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='posting',
            name='job_code',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='posting',
            name='job_group',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='posting',
            name='job_type',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='posting',
            name='location',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='posting',
            name='modification_timestamp',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='posting',
            name='posting_url',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='posting',
            name='salary',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='posting',
            name='title',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
