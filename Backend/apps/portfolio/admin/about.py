from django.contrib import admin
from django.utils.html import format_html
from unfold.admin import ModelAdmin

from apps.portfolio.models import About


@admin.register(About)
class AboutAdmin(ModelAdmin):
    """
    Admin configuration for About model.
    """

    list_display = (
        "profile_preview",
        "full_name",
        "email",
        "phone_number",
        "created_at",
    )

    search_fields = (
        "full_name",
        "email",
        "phone_number",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
        "profile_preview",
    )

    fieldsets = (
        (
            "Personal Information",
            {
                "fields": (
                    "full_name",
                    "date_of_birth",
                    "email",
                    "phone_number",
                )
            },
        ),
        (
            "About",
            {
                "fields": (
                    "short_description",
                    "long_description",
                )
            },
        ),
        (
            "Media",
            {
                "fields": (
                    "profile_image",
                    "profile_preview",
                    "resume",
                )
            },
        ),
        (
            "System",
            {
                "classes": ("collapse",),
                "fields": (
                    "created_at",
                    "updated_at",
                ),
            },
        ),
    )

    def profile_preview(self, obj):
        if obj.profile_image:
            return format_html(
                '<img src="{}" width="80" height="80" '
                'style="border-radius:10px;object-fit:cover;" />',
                obj.profile_image.url,
            )
        return "-"

    profile_preview.short_description = "Profile"