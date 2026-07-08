from django.db import models

from apps.common.models import TimeStampedModel
from django.core.exceptions import ValidationError

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

    def clean(self):
        if not self.pk and About.objects.exists():
            raise ValidationError("Only one About record is allowed.")

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)
   
   
    class Meta:
        verbose_name = "About"
        verbose_name_plural = "About"
        ordering = ["full_name"]
        

    def __str__(self):
        return self.full_name