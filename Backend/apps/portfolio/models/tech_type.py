from django.db import models

from apps.common.models import TimeStampedModel


class TechnologyType(TimeStampedModel):
    name = models.CharField(
        max_length=100,
        unique=True,
    )

    display_order = models.PositiveIntegerField(
        default=1,
    )

    is_active = models.BooleanField(
        default=True,
    )

    class Meta:
        ordering = ["display_order", "name"]
        verbose_name = "Technology Type"
        verbose_name_plural = "Technology Types"

    def __str__(self):
        return self.name