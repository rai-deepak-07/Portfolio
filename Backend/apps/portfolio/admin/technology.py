from django.contrib import admin
from unfold.admin import ModelAdmin

from apps.portfolio.models import Technology


@admin.register(Technology)
class TechnologyAdmin(ModelAdmin):

    list_display = (
        "name",
        "category",
        "created_at",
    )

    search_fields = (
        "name",
        "category__name",
    )

    list_filter = (
        "category",
    )

    ordering = (
        "category",
        "name",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    fieldsets = (
        (
            "Technology Information",
            {
                "fields": (
                    "category",
                    "name",
                )
            },
        ),
        (
            "System Information",
            {
                "classes": ("collapse",),
                "fields": (
                    "created_at",
                    "updated_at",
                ),
            },
        ),
    )