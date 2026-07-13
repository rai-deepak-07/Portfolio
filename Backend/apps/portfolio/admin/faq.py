from django.contrib import admin
from django.db.models import Max
from unfold.admin import ModelAdmin

from apps.portfolio.models import FAQ


@admin.register(FAQ)
class FAQAdmin(ModelAdmin):

    list_display = (
        "question",
        "display_order",
        "is_active",
        "created_at",
    )

    list_filter = (
        "is_active",
    )

    search_fields = (
        "question",
        "answer",
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
            "FAQ Information",
            {
                "fields": (
                    "question",
                    "answer",
                ),
            },
        ),
        (
            "Display Settings",
            {
                "fields": (
                    "display_order",
                    "is_active",
                ),
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

    # Auto-fill next display order
    def get_changeform_initial_data(self, request):
        initial = super().get_changeform_initial_data(request)

        last_order = FAQ.objects.aggregate(
            max_order=Max("display_order")
        )["max_order"] or 0

        initial["display_order"] = last_order + 1

        return initial

    # Swap display order if duplicate exists
    def save_model(self, request, obj, form, change):
        if change:
            old_obj = FAQ.objects.get(pk=obj.pk)
            old_order = old_obj.display_order
        else:
            old_order = None

        duplicate = FAQ.objects.filter(
            display_order=obj.display_order
        ).exclude(pk=obj.pk).first()

        if duplicate and old_order is not None:
            duplicate.display_order = old_order
            duplicate.save(update_fields=["display_order"])

        super().save_model(request, obj, form, change)