from django.db import models

from apps.common.models import TimeStampedModel


def certificate_upload_path(instance, filename):
    """
    Upload Path:
    media/portfolio/certificates/<certificate_name>/<filename>
    """
    certificate_name = instance.title.replace(" ", "_")
    return f"portfolio/certificates/{certificate_name}/{filename}"


class Certificate(TimeStampedModel):
    """
    Certificates earned by the portfolio owner.
    """

    title = models.CharField(
        max_length=200
    )

    issuer = models.CharField(
        max_length=200
    )

    issue_date = models.DateField()

    expiry_date = models.DateField(
        null=True,
        blank=True
    )

    credential_id = models.CharField(
        max_length=150,
        blank=True
    )

    credential_url = models.URLField(
        blank=True
    )

    image = models.ImageField(
        upload_to=certificate_upload_path
    )

    description = models.TextField(
        blank=True
    )

    display_order = models.PositiveIntegerField(
        default=1
    )

    is_featured = models.BooleanField(
        default=False
    )

    class Meta:
        db_table = "portfolio_certificates"
        ordering = ["display_order", "-issue_date"]
        verbose_name = "Certificate"
        verbose_name_plural = "Certificates"
        indexes = [
            models.Index(fields=["title"]),
            models.Index(fields=["issuer"]),
            models.Index(fields=["issue_date"]),
        ]

    def __str__(self):
        return self.title