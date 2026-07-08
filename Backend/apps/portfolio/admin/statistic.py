from django.contrib import admin
from unfold.admin import ModelAdmin

from apps.portfolio.models import Statistic


@admin.register(Statistic)
class StatisticAdmin(ModelAdmin):

    list_display = (
        "title",
        "value",
        "icon",
        "display_order",
        "is_active",
    )

    search_fields = (
        "title",
        "subtitle",
    )

    list_filter = (
        "is_active",
    )

    ordering = (
        "display_order",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    fieldsets = (
        (
            "Statistic",
            {
                "fields": (
                    "title",
                    "value",
                    "subtitle",
                    "icon",
                    "color",
                )
            },
        ),
        (
            "Settings",
            {
                "fields": (
                    "display_order",
                    "is_active",
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