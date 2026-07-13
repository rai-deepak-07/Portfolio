from django.db import models

from apps.common.models import TimeStampedModel


class FAQ(TimeStampedModel):
    question = models.CharField(
        max_length=255,
    )

    answer = models.TextField()

    display_order = models.PositiveIntegerField(
        default=1,
    )

    is_active = models.BooleanField(
        default=True,
    )

    class Meta:
        ordering = ["display_order"]
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"

    def __str__(self):
        return self.question