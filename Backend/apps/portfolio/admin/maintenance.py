from django.contrib import admin, messages
from django.core.exceptions import ValidationError
from unfold.admin import ModelAdmin

from apps.portfolio.models import Maintenance
from apps.portfolio.services import MaintenanceService


@admin.register(Maintenance)
class MaintenanceAdmin(ModelAdmin):
    """
    Django Admin for Maintenance.
    """

    list_display = (
        "title",
        "is_active",
        "start_date",
        "end_date",
        "show_countdown",
        "allow_admin_access",
        "created_at",
    )

    list_filter = (
        "is_active",
        "show_countdown",
        "allow_admin_access",
    )

    search_fields = (
        "title",
        "message",
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
            "Schedule",
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

    actions = (
        "activate_selected",
        "deactivate_selected",
    )

    def save_model(
        self,
        request,
        obj,
        form,
        change,
    ):
        """
        Save maintenance and apply business rules.
        """

        super().save_model(
            request,
            obj,
            form,
            change,
        )

        try:
            if obj.is_active:
                MaintenanceService.activate(obj)
            else:
                MaintenanceService.sync()

        except Exception as exc:
            messages.error(
                request,
                str(exc),
            )

    @admin.action(description="Activate selected maintenance")
    def activate_selected(
        self,
        request,
        queryset,
    ):
        count = 0

        for maintenance in queryset:
            try:
                MaintenanceService.activate(
                    maintenance
                )
                count += 1

            except ValidationError as exc:
                self.message_user(
                    request,
                    str(exc),
                    level=messages.ERROR,
                )

            except Exception as exc:
                self.message_user(
                    request,
                    str(exc),
                    level=messages.ERROR,
                )

        if count:
            self.message_user(
                request,
                f"{count} maintenance schedule(s) activated.",
                level=messages.SUCCESS,
            )

    @admin.action(description="Deactivate selected maintenance")
    def deactivate_selected(
        self,
        request,
        queryset,
    ):
        updated = 0

        for maintenance in queryset:
            if maintenance.is_active:
                MaintenanceService.deactivate(
                    maintenance
                )
                updated += 1

        self.message_user(
            request,
            f"{updated} maintenance schedule(s) deactivated.",
            level=messages.SUCCESS,
        )