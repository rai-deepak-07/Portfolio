from django.db import models

from apps.common.models import TimeStampedModel
from .technology import Technology


class Service(TimeStampedModel):
    title = models.CharField(max_length=100)

    short_description = models.TextField()

    icon = models.CharField(max_length=100)

    technologies = models.ManyToManyField(
        Technology,
        blank=True,
        related_name="services"
    )

    button_text = models.CharField(
        max_length=50,
        blank=True
    )

    button_url = models.CharField(
        max_length=255,
        blank=True
    )

    is_featured = models.BooleanField(default=False)

    display_order = models.PositiveIntegerField(default=1)

    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["display_order"]

    def __str__(self):
        return self.title