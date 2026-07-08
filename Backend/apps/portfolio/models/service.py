from django.db import models

from apps.common.models import TimeStampedModel


class Service(TimeStampedModel):
    title = models.CharField(max_length=100)

    icon = models.CharField(max_length=100)

    description = models.TextField()

    display_order = models.PositiveIntegerField(default=1)

    class Meta:
        ordering = ["display_order"]

    def __str__(self):
        return self.title