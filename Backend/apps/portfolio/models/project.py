import uuid

from django.db import models

from apps.common.models import TimeStampedModel
from .technology import Technology


class Project(TimeStampedModel):

    title = models.CharField(max_length=200)

    slug = models.SlugField(
        unique=True,
        blank=True
    )

    technology = models.ForeignKey(
        Technology,
        on_delete=models.CASCADE,
        related_name="projects"
    )

    description = models.TextField()

    github_url = models.URLField(
        blank=True
    )

    live_url = models.URLField(
        blank=True
    )

    thumbnail = models.ImageField(
        upload_to="portfolio/projects/"
    )

    featured = models.BooleanField(
        default=False
    )

    uuid = models.UUIDField(
        default=uuid.uuid4,
        editable=False,
        unique=True
    )

    class Meta:
        ordering = ["title"]

    def __str__(self):
        return self.title
    
    
    
def project_image_upload_path(instance, filename):
    return f"portfolio/projects/{instance.project.slug}/{filename}"



class ProjectImage(TimeStampedModel):

    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name="images"
    )

    image = models.ImageField(
        upload_to=project_image_upload_path
    )

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return self.project.title