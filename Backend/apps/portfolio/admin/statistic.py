from django.contrib import admin
from django.db.models import Max

from unfold.admin import ModelAdmin

from apps.portfolio.models import Statistic


@admin.register(Statistic)
class StatisticAdmin(ModelAdmin):

    list_display = (
        "display_order",
        "title",
        "value",
        "icon",
        "is_active",
        "created_at",
    )

    list_display_links = (
        "title",
    )

    ordering = (
        "display_order",
    )

    search_fields = (
        "title",
        "description",
        "value",
    )

    list_filter = (
        "is_active",
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
                    "description",
                    "icon",
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

    def get_changeform_initial_data(self, request):
        """
        Automatically suggest the next display order.
        """

        initial = super().get_changeform_initial_data(request)

        last_order = (
            Statistic.objects.aggregate(
                max_order=Max("display_order")
            )["max_order"]
            or 0
        )

        initial["display_order"] = last_order + 1

        return initial