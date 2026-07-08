from django.contrib import admin
from django.utils.html import format_html

from unfold.admin import ModelAdmin

from apps.portfolio.models import Project, ProjectImage


class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1


@admin.register(Project)
class ProjectAdmin(ModelAdmin):

    inlines = [ProjectImageInline]

    list_display = (
        "thumbnail_preview",
        "title",
        "technology",
        "featured",
        "created_at",
    )

    search_fields = (
        "title",
        "description",
    )

    list_filter = (
        "featured",
        "technology",
    )

    ordering = (
        "title",
    )

    readonly_fields = (
        "slug",
        "uuid",
        "thumbnail_preview",
        "created_at",
        "updated_at",
    )

    fieldsets = (
        (
            "Project Information",
            {
                "fields": (
                    "title",
                    "slug",
                    "technology",
                    "description",
                )
            },
        ),
        (
            "Project Links",
            {
                "fields": (
                    "github_url",
                    "live_url",
                )
            },
        ),
        (
            "Media",
            {
                "fields": (
                    "thumbnail",
                    "thumbnail_preview",
                )
            },
        ),
        (
            "Settings",
            {
                "fields": (
                    "featured",
                )
            },
        ),
        (
            "System Information",
            {
                "classes": ("collapse",),
                "fields": (
                    "uuid",
                    "created_at",
                    "updated_at",
                ),
            },
        ),
    )

    def thumbnail_preview(self, obj):
        if obj.thumbnail:
            return format_html(
                '<img src="{}" width="90" height="60" style="border-radius:8px; object-fit:cover;" />',
                obj.thumbnail.url,
            )
        return "-"

    thumbnail_preview.short_description = "Thumbnail"


@admin.register(ProjectImage)
class ProjectImageAdmin(ModelAdmin):

    list_display = (
        "image_preview",
        "project",
        "created_at",
    )

    search_fields = (
        "project__title",
    )

    readonly_fields = (
        "image_preview",
        "created_at",
        "updated_at",
    )

    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" width="90" height="60" style="border-radius:8px; object-fit:cover;" />',
                obj.image.url,
            )
        return "-"

    image_preview.short_description = "Preview"