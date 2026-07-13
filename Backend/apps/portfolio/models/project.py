import uuid

from django.core.exceptions import ValidationError
from django.db import models
from django.utils.text import slugify

from apps.common.models import TimeStampedModel
from .technology import Technology


class ProjectCategory(TimeStampedModel):
    name = models.CharField(
        max_length=100,
        unique=True,
        help_text="Display name of the project category."
    )

    slug = models.SlugField(
        unique=True,
        blank=True,
        help_text="Auto-generated unique slug."
    )

    icon = models.CharField(
        max_length=100,
        blank=True,
        help_text="Optional icon name (Lucide, FontAwesome, etc.)."
    )

    display_order = models.PositiveIntegerField(
        default=1,
        help_text="Controls the display order of categories."
    )

    is_active = models.BooleanField(
        default=True,
        help_text="Uncheck to hide this category."
    )

    class Meta:
        ordering = ("display_order", "name")
        verbose_name = "Project Category"
        verbose_name_plural = "Project Categories"

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.name)
            slug = base_slug
            counter = 1
            while ProjectCategory.objects.filter(slug=slug).exclude(pk=self.pk).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug

        if not self.pk and self.display_order == 1:
            last = ProjectCategory.objects.order_by("-display_order").first()
            self.display_order = (last.display_order + 1) if last else 1

        duplicate = ProjectCategory.objects.filter(
            display_order=self.display_order
        ).exclude(pk=self.pk).first()

        if duplicate:
            old = duplicate.display_order
            duplicate.display_order = self.display_order + 1
            duplicate.save(update_fields=["display_order"])
            self.display_order = old

        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class ProjectStatus(models.TextChoices):
    LIVE = "LIVE", "Live"
    DEVELOPMENT = "DEVELOPMENT", "In Development"
    MAINTENANCE = "MAINTENANCE", "Maintenance"
    ARCHIVED = "ARCHIVED", "Archived"


class ProjectType(models.TextChoices):
    PERSONAL = "PERSONAL", "Personal"
    CLIENT = "CLIENT", "Client"
    OPEN_SOURCE = "OPEN_SOURCE", "Open Source"
    COLLEGE = "COLLEGE", "College"


class Project(TimeStampedModel):
    title = models.CharField(
        max_length=200,
        help_text="Project title."
    )

    slug = models.SlugField(
        unique=True,
        blank=True,
        help_text="Automatically generated from title."
    )

    category = models.ForeignKey(
        ProjectCategory,
        on_delete=models.SET_NULL,
        null=True,
        related_name="projects",
        help_text="Project category."
    )

    technologies = models.ManyToManyField(
        Technology,
        related_name="projects",
        help_text="Technologies used in this project."
    )

    short_description = models.CharField(
        max_length=250,
        help_text="Short summary for cards."
    )

    description = models.TextField(
        help_text="Complete project description."
    )

    github_url = models.URLField(
        blank=True,
        help_text="GitHub repository URL."
    )

    live_url = models.URLField(
        blank=True,
        help_text="Live demo URL."
    )

    demo_video_url = models.URLField(
        blank=True,
        help_text="Demo video URL."
    )

    figma_url = models.URLField(
        blank=True,
        help_text="Figma design URL."
    )

    thumbnail = models.ImageField(
        upload_to="portfolio/projects/",
        help_text="Main thumbnail image."
    )

    status = models.CharField(
        max_length=20,
        choices=ProjectStatus.choices,
        default=ProjectStatus.LIVE,
        help_text="Current project status."
    )

    project_type = models.CharField(
        max_length=20,
        choices=ProjectType.choices,
        default=ProjectType.PERSONAL,
        help_text="Project type."
    )

    client = models.CharField(
        max_length=150,
        blank=True,
        help_text="Client or organization."
    )

    duration = models.CharField(
        max_length=50,
        blank=True,
        help_text="Example: 3 Months"
    )

    project_year = models.PositiveIntegerField(
        default=2026,
        help_text="Project completion year."
    )

    featured = models.BooleanField(
        default=False,
        help_text="Highlight this project."
    )

    show_on_home = models.BooleanField(
        default=False,
        help_text="Show project on landing page."
    )

    display_order = models.PositiveIntegerField(
        default=1,
        help_text="Controls project ordering."
    )

    is_active = models.BooleanField(
        default=True,
        help_text="Hide project without deleting."
    )

    uuid = models.UUIDField(
        default=uuid.uuid4,
        editable=False,
        unique=True,
        help_text="Unique project identifier."
    )

    class Meta:
        ordering = ("display_order", "title")
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    def clean(self):
        if self.project_year < 2000:
            raise ValidationError({"project_year": "Enter a valid year."})

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.title)
            slug = base_slug
            counter = 1
            while Project.objects.filter(slug=slug).exclude(pk=self.pk).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug

        if not self.pk and self.display_order == 1:
            last = Project.objects.order_by("-display_order").first()
            self.display_order = (last.display_order + 1) if last else 1

        duplicate = Project.objects.filter(
            display_order=self.display_order
        ).exclude(pk=self.pk).first()

        if duplicate:
            duplicate.display_order += 1
            duplicate.save(update_fields=["display_order"])

        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


def project_image_upload_path(instance, filename):
    return f"portfolio/projects/{instance.project.slug}/{filename}"


class ProjectImage(TimeStampedModel):
    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name="images",
        help_text="Parent project."
    )

    image = models.ImageField(
        upload_to=project_image_upload_path,
        help_text="Additional project image."
    )

    class Meta:
        ordering = ("id",)
        verbose_name = "Project Image"
        verbose_name_plural = "Project Images"

    def __str__(self):
        return f"{self.project.title} Image"
