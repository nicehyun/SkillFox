# Generated by Django 5.0.3 on 2024-04-04 16:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('postings', '0020_posting_company_link_posting_company_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='posting',
            name='company_link',
        ),
        migrations.RemoveField(
            model_name='posting',
            name='company_name',
        ),
        migrations.RemoveField(
            model_name='posting',
            name='education_level',
        ),
        migrations.RemoveField(
            model_name='posting',
            name='experience_max',
        ),
        migrations.RemoveField(
            model_name='posting',
            name='experience_min',
        ),
        migrations.RemoveField(
            model_name='posting',
            name='industry',
        ),
        migrations.RemoveField(
            model_name='posting',
            name='job_code',
        ),
        migrations.RemoveField(
            model_name='posting',
            name='job_group',
        ),
        migrations.RemoveField(
            model_name='posting',
            name='job_type',
        ),
        migrations.RemoveField(
            model_name='posting',
            name='location',
        ),
        migrations.RemoveField(
            model_name='posting',
            name='modification_timestamp',
        ),
        migrations.RemoveField(
            model_name='posting',
            name='posting_url',
        ),
        migrations.RemoveField(
            model_name='posting',
            name='salary',
        ),
        migrations.RemoveField(
            model_name='posting',
            name='title',
        ),
    ]
