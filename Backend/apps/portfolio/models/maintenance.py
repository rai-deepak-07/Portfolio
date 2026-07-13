from django.core.exceptions import ValidationError
from django.db import models
from django.utils import timezone

from apps.common.models import TimeStampedModel


class Maintenance(TimeStampedModel):
    """
    Maintenance mode configuration.

    Rules:
    - Only one maintenance record can be active at a time.
    - Expired maintenance can never become active again.
    - Active maintenance periods cannot overlap.
    """

    title = models.CharField(
        max_length=200
    )

    message = models.TextField()

    start_date = models.DateTimeField()

    end_date = models.DateTimeField()

    is_active = models.BooleanField(
        default=False,
        help_text="Enable this maintenance schedule."
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

    class Meta:
        db_table = "portfolio_maintenance"
        ordering = ("-created_at",)
        verbose_name = "Maintenance"
        verbose_name_plural = "Maintenance"

    def __str__(self):
        return self.title

    def clean(self):
        """
        Validate maintenance configuration.
        """

        super().clean()

        # End date must be after start date
        if self.start_date >= self.end_date:
            raise ValidationError({
                "end_date": "End date must be greater than start date."
            })

        now = timezone.now()

        # Prevent activating expired maintenance
        if self.is_active and self.end_date <= now:
            raise ValidationError({
                "is_active": (
                    "Expired maintenance cannot be activated."
                )
            })

        # Check overlapping active schedules
        if self.is_active:
            overlap = Maintenance.objects.filter(
                is_active=True,
                start_date__lt=self.end_date,
                end_date__gt=self.start_date,
            )

            if self.pk:
                overlap = overlap.exclude(pk=self.pk)

            if overlap.exists():
                raise ValidationError(
                    "Another active maintenance schedule overlaps "
                    "with this time period."
                )

    def save(self, *args, **kwargs):
        """
        Save maintenance record.
        """

        self.full_clean()

        super().save(*args, **kwargs)

    @property
    def is_currently_active(self):
        """
        Returns True only if maintenance is currently active.
        """

        now = timezone.now()

        return (
            self.is_active
            and self.start_date <= now <= self.end_date
        )

    @property
    def is_expired(self):
        """
        Returns True if maintenance has already ended.
        """

        return self.end_date < timezone.now()

    @property
    def is_upcoming(self):
        """
        Returns True if maintenance has not started yet.
        """

        return self.start_date > timezone.now()