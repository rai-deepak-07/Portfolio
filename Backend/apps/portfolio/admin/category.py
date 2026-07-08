from django.contrib import admin
from unfold.admin import ModelAdmin

from apps.portfolio.models import Category


@admin.register(Category)
class CategoryAdmin(ModelAdmin):

    list_display = (
        "name",
        "created_at",
    )

    search_fields = (
        "name",
    )

    ordering = (
        "name",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    fieldsets = (
        (
            "Category Information",
            {
                "fields": (
                    "name",
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