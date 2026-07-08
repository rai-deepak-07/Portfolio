from django.db import models

from apps.common.models import TimeStampedModel


class About(TimeStampedModel):
    full_name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    short_description = models.TextField()
    long_description = models.TextField(blank=True)

    profile_image = models.ImageField(
        upload_to="portfolio/about/"
    )

    resume = models.FileField(
        upload_to="portfolio/about/"
    )

    class Meta:
        verbose_name = "About"
        verbose_name_plural = "About"
        ordering = ["full_name"]

    def __str__(self):
        return self.full_name