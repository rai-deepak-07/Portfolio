from django.db import models

from apps.common.models import TimeStampedModel
from .tech_type import TechnologyType


class Technology(TimeStampedModel):

    name = models.CharField(
        max_length=100,
        unique=True,
    )

    tech_type = models.ForeignKey(
        TechnologyType,
        on_delete=models.CASCADE,
        related_name="technologies",
    )

    icon = models.CharField(
        max_length=100,
        help_text="React Icon name, e.g. SiReact"
    )

    color = models.CharField(
        max_length=20,
        help_text="Hex color code, e.g. #61DAFB"
    )

    display_order = models.PositiveIntegerField(
        default=1
    )

    is_active = models.BooleanField(
        default=True
    )

    class Meta:
        ordering = ["display_order", "name"]

    def __str__(self):
        return self.name