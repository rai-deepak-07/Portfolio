from django.contrib import admin
from unfold.admin import ModelAdmin

from apps.portfolio.models import Contact


@admin.action(description="Mark selected contacts as Read")
def mark_as_read(modeladmin, request, queryset):
    queryset.update(is_read=True)


@admin.action(description="Mark selected contacts as Replied")
def mark_as_replied(modeladmin, request, queryset):
    queryset.update(is_replied=True)


@admin.register(Contact)
class ContactAdmin(ModelAdmin):

    actions = [
        mark_as_read,
        mark_as_replied,
    ]

    list_display = (
        "name",
        "email",
        "subject",
        "is_read",
        "is_replied",
        "created_at",
    )

    search_fields = (
        "name",
        "email",
        "subject",
    )

    list_filter = (
        "is_read",
        "is_replied",
    )

    ordering = (
        "-created_at",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
        "ip_address",
        "user_agent",
    )