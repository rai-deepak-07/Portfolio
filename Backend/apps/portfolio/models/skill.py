from django.db import models

from apps.common.models import TimeStampedModel


class SkillCategory(TimeStampedModel):
    """
    Categories of skills.
    Example:
    - Frontend
    - Backend
    - Database
    - DevOps
    """

    title = models.CharField(
        max_length=100,
        unique=True
    )

    display_order = models.PositiveIntegerField(
        default=1
    )

    class Meta:
        db_table = "portfolio_skill_categories"
        ordering = ["display_order", "title"]
        verbose_name = "Skill Category"
        verbose_name_plural = "Skill Categories"

    def __str__(self):
        return self.title


class Skill(TimeStampedModel):
    """
    Individual skill.
    Example:
    React
    Django
    PostgreSQL
    Docker
    """

    category = models.ForeignKey(
        SkillCategory,
        on_delete=models.CASCADE,
        related_name="skills"
    )

    name = models.CharField(
        max_length=100
    )

    proficiency = models.PositiveSmallIntegerField(
        default=80,
        help_text="Skill percentage (0-100)"
    )

    icon = models.CharField(
        max_length=100,
        blank=True,
        help_text="Optional icon class or image name"
    )

    display_order = models.PositiveIntegerField(
        default=1
    )

    class Meta:
        db_table = "portfolio_skills"
        ordering = ["display_order", "name"]
        verbose_name = "Skill"
        verbose_name_plural = "Skills"
        constraints = [
            models.UniqueConstraint(
                fields=["category", "name"],
                name="unique_skill_per_category"
            )
        ]

    def __str__(self):
        return self.name