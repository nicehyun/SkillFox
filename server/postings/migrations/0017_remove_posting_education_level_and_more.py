# Generated by Django 5.0.3 on 2024-04-06 06:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('postings', '0016_posting_educations_posting_incomes_posting_regions'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='posting',
            name='education_level',
        ),
        migrations.RemoveField(
            model_name='posting',
            name='location',
        ),
        migrations.RemoveField(
            model_name='posting',
            name='salary',
        ),
    ]