from django.db import models

from apps.common.models import TimeStampedModel


class Contact(TimeStampedModel):
    """
    Contact messages submitted from the portfolio website.
    """

    name = models.CharField(
        max_length=100
    )

    email = models.EmailField()

    subject = models.CharField(
        max_length=200
    )

    message = models.TextField()

    phone_number = models.CharField(
        max_length=15,
        blank=True
    )

    is_read = models.BooleanField(
        default=False
    )

    is_replied = models.BooleanField(
        default=False
    )

    replied_at = models.DateTimeField(
        null=True,
        blank=True
    )

    ip_address = models.GenericIPAddressField(
        null=True,
        blank=True
    )

    user_agent = models.TextField(
        blank=True
    )

    class Meta:
        db_table = "portfolio_contacts"
        ordering = ["-created_at"]
        verbose_name = "Contact"
        verbose_name_plural = "Contacts"
        indexes = [
            models.Index(fields=["email"]),
            models.Index(fields=["is_read"]),
            models.Index(fields=["created_at"]),
        ]

    def __str__(self):
        return f"{self.name} ({self.email})"