from django.db import models

from apps.common.models import TimeStampedModel


class ResumeSection(TimeStampedModel):
    """
    Resume section such as:
    - Education
    - Experience
    - Internship
    - Training
    """

    title = models.CharField(
        max_length=100,
        unique=True
    )

    display_order = models.PositiveIntegerField(
        default=1
    )

    class Meta:
        db_table = "portfolio_resume_sections"
        ordering = ["display_order", "title"]
        verbose_name = "Resume Section"
        verbose_name_plural = "Resume Sections"

    def __str__(self):
        return self.title


class ResumeEntry(TimeStampedModel):
    """
    Individual resume item belonging to a section.
    """

    section = models.ForeignKey(
        ResumeSection,
        on_delete=models.CASCADE,
        related_name="entries"
    )

    title = models.CharField(
        max_length=200
    )

    organization = models.CharField(
        max_length=200
    )

    location = models.CharField(
        max_length=200,
        blank=True
    )

    start_date = models.DateField()

    end_date = models.DateField(
        null=True,
        blank=True
    )

    currently_active = models.BooleanField(
        default=False
    )

    description = models.TextField(
        blank=True
    )

    display_order = models.PositiveIntegerField(
        default=1
    )

    class Meta:
        db_table = "portfolio_resume_entries"
        ordering = ["display_order", "-start_date"]
        verbose_name = "Resume Entry"
        verbose_name_plural = "Resume Entries"

    def __str__(self):
        return self.title