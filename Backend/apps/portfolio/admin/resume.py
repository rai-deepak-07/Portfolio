from django.contrib import admin
from unfold.admin import ModelAdmin

from apps.portfolio.models import ResumeSection, ResumeEntry


class ResumeEntryInline(admin.TabularInline):
    model = ResumeEntry
    extra = 1
    fields = (
        "title",
        "organization",
        "location",
        "start_date",
        "end_date",
        "currently_active",
        "display_order",
    )


@admin.register(ResumeSection)
class ResumeSectionAdmin(ModelAdmin):

    inlines = [ResumeEntryInline]

    list_display = (
        "title",
        "display_order",
        "created_at",
    )

    search_fields = (
        "title",
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
            "Resume Section",
            {
                "fields": (
                    "title",
                    "display_order",
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


@admin.register(ResumeEntry)
class ResumeEntryAdmin(ModelAdmin):

    list_display = (
        "title",
        "section",
        "organization",
        "start_date",
        "currently_active",
    )

    search_fields = (
        "title",
        "organization",
    )

    list_filter = (
        "section",
        "currently_active",
    )

    ordering = (
        "-start_date",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )