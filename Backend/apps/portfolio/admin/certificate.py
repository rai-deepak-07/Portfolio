from django.contrib import admin
from django.utils.html import format_html
from unfold.admin import ModelAdmin

from apps.portfolio.models import Certificate


@admin.register(Certificate)
class CertificateAdmin(ModelAdmin):

    list_display = (
        "image_preview",
        "title",
        "issuer",
        "issue_date",
        "is_featured",
    )

    search_fields = (
        "title",
        "issuer",
        "credential_id",
    )

    list_filter = (
        "issuer",
        "is_featured",
        "issue_date",
    )

    ordering = (
        "display_order",
        "-issue_date",
    )

    readonly_fields = (
        "image_preview",
        "created_at",
        "updated_at",
    )

    fieldsets = (
        (
            "Certificate Information",
            {
                "fields": (
                    "title",
                    "issuer",
                    "description",
                )
            },
        ),
        (
            "Credential",
            {
                "fields": (
                    "credential_id",
                    "credential_url",
                )
            },
        ),
        (
            "Certificate",
            {
                "fields": (
                    "image",
                    "image_preview",
                )
            },
        ),
        (
            "Settings",
            {
                "fields": (
                    "issue_date",
                    "expiry_date",
                    "display_order",
                    "is_featured",
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
                )
            },
        ),
    )

    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" width="120" style="border-radius:8px;" />',
                obj.image.url,
            )
        return "-"

    image_preview.short_description = "Preview"