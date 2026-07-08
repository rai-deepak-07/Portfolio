from django.db import models

from apps.common.models import TimeStampedModel


class Statistic(TimeStampedModel):
    """
    Portfolio statistics displayed on the homepage.

    Examples:
    - Projects Completed
    - Happy Clients
    - Years of Experience
    - Certificates
    - Problems Solved
    """

    title = models.CharField(
        max_length=100,
        unique=True
    )

    value = models.CharField(
        max_length=50,
        help_text="Example: 50+, 3+, 100+"
    )

    icon = models.CharField(
        max_length=100,
        help_text="Icon class (Lucide, FontAwesome, Bootstrap Icons, etc.)"
    )

    subtitle = models.CharField(
        max_length=200,
        blank=True
    )

    color = models.CharField(
        max_length=30,
        blank=True,
        help_text="Optional color code (e.g. #3B82F6)"
    )

    display_order = models.PositiveIntegerField(
        default=1
    )

    is_active = models.BooleanField(
        default=True
    )

    class Meta:
        db_table = "portfolio_statistics"
        ordering = ["display_order", "title"]
        verbose_name = "Statistic"
        verbose_name_plural = "Statistics"
        indexes = [
            models.Index(fields=["display_order"]),
            models.Index(fields=["is_active"]),
        ]

    def __str__(self):
        return self.title