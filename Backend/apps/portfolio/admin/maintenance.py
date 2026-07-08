from django.contrib import admin
from unfold.admin import ModelAdmin

from apps.portfolio.models import Maintenance


@admin.register(Maintenance)
class MaintenanceAdmin(ModelAdmin):

    list_display = (
        "title",
        "is_active",
        "start_date",
        "end_date",
        "created_at",
    )

    search_fields = (
        "title",
        "message",
    )

    list_filter = (
        "is_active",
        "show_countdown",
        "allow_admin_access",
    )

    ordering = (
        "-created_at",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    fieldsets = (
        (
            "Maintenance",
            {
                "fields": (
                    "title",
                    "message",
                )
            },
        ),
        (
            "Duration",
            {
                "fields": (
                    "start_date",
                    "end_date",
                )
            },
        ),
        (
            "Configuration",
            {
                "fields": (
                    "is_active",
                    "show_countdown",
                    "allow_admin_access",
                    "maintenance_image",
                    "button_text",
                    "button_url",
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