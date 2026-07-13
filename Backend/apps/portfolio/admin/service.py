from django.contrib import admin
from unfold.admin import ModelAdmin

from apps.portfolio.models import Service
from django.db.models import Max

@admin.register(Service)
class ServiceAdmin(ModelAdmin):

    list_display = (
        "title",
        "is_featured",
        "is_active",
        "display_order",
        "created_at",
    )

    list_filter = (
        "is_featured",
        "is_active",
    )

    search_fields = (
        "title",
        "short_description",
    )

    filter_horizontal = (
        "technologies",
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
            "Service Information",
            {
                "fields": (
                    "title",
                    "short_description",
                    "icon",
                    "technologies",
                )
            },
        ),
        (
            "Call To Action",
            {
                "fields": (
                    "button_text",
                    "button_url",
                )
            },
        ),
        (
            "Display Settings",
            {
                "fields": (
                    "is_featured",
                    "is_active",
                    "display_order",
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
    
    
    # Auto-fill next display order
    def get_changeform_initial_data(self, request):
        initial = super().get_changeform_initial_data(request)

        last_order = (
            Service.objects.aggregate(
                max_order=Max("display_order")
            )["max_order"]
            or 0
        )

        initial["display_order"] = last_order + 1

        return initial


    # Swap display order if duplicate exists
    def save_model(self, request, obj, form, change):
        if change:
            old_obj = Service.objects.get(pk=obj.pk)
            old_order = old_obj.display_order
        else:
            old_order = None

        duplicate = (
            Service.objects.filter(
                display_order=obj.display_order
            )
            .exclude(pk=obj.pk)
            .first()
        )

        if duplicate and old_order is not None:
            duplicate.display_order = old_order
            duplicate.save(update_fields=["display_order"])

        super().save_model(request, obj, form, change)