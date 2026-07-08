from django.db import models

from apps.common.models import TimeStampedModel
from .category import Category


class Technology(TimeStampedModel):
    name = models.CharField(
        max_length=100,
        unique=True
    )

    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="technologies"
    )

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name