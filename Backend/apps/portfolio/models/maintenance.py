from django.db import models

from apps.common.models import TimeStampedModel


class Maintenance(TimeStampedModel):
    """
    Maintenance mode configuration for the portfolio.
    Only one active record should normally exist.
    """

    title = models.CharField(
        max_length=200
    )

    message = models.TextField()

    start_date = models.DateTimeField(
        null=True,
        blank=True
    )

    end_date = models.DateTimeField(
        null=True,
        blank=True
    )

    is_active = models.BooleanField(
        default=False
    )

    show_countdown = models.BooleanField(
        default=True
    )

    allow_admin_access = models.BooleanField(
        default=True
    )

    maintenance_image = models.ImageField(
        upload_to="portfolio/maintenance/",
        blank=True,
        null=True
    )

    button_text = models.CharField(
        max_length=100,
        default="Go Back"
    )

    button_url = models.CharField(
        max_length=255,
        blank=True
    )

    class Meta:
        db_table = "portfolio_maintenance"
        ordering = ["-created_at"]
        verbose_name = "Maintenance"
        verbose_name_plural = "Maintenance"

    def __str__(self):
        return self.title