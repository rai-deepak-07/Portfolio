from django.db import transaction
from django.utils import timezone

from apps.portfolio.models import Maintenance


class MaintenanceService:
    """
    Handles all maintenance activation/deactivation logic.
    """

    @staticmethod
    @transaction.atomic
    def sync():
        """
        Synchronize all maintenance records.

        Rules:
        - Expired maintenance is automatically disabled.
        - Future maintenance remains inactive until its start time.
        - Only one maintenance record can remain active.
        - Returns the currently active maintenance record.
        """

        now = timezone.now()

        # ----------------------------------------------------
        # Step 1: Disable expired maintenance
        # ----------------------------------------------------

        Maintenance.objects.filter(
            is_active=True,
            end_date__lt=now,
        ).update(is_active=False)

        # ----------------------------------------------------
        # Step 2: Find valid active maintenance
        # ----------------------------------------------------

        active_records = (
            Maintenance.objects.filter(
                is_active=True,
                start_date__lte=now,
                end_date__gte=now,
            )
            .order_by("start_date", "created_at")
        )

        active = active_records.first()

        # ----------------------------------------------------
        # Step 3: Ensure only one active record exists
        # ----------------------------------------------------

        if active:

            Maintenance.objects.filter(
                is_active=True
            ).exclude(
                pk=active.pk
            ).update(
                is_active=False
            )

        return active

    @staticmethod
    def get_active():
        """
        Returns the current active maintenance record.
        """

        return MaintenanceService.sync()

    @staticmethod
    @transaction.atomic
    def activate(maintenance):
        """
        Activate a maintenance record.

        Rules:
        - Cannot activate expired maintenance.
        - Automatically deactivates every other maintenance.
        """

        now = timezone.now()

        if maintenance.end_date < now:
            raise ValueError(
                "Expired maintenance cannot be activated."
            )

        Maintenance.objects.update(
            is_active=False
        )

        maintenance.is_active = True
        maintenance.save(update_fields=["is_active"])

        return maintenance

    @staticmethod
    @transaction.atomic
    def deactivate(maintenance):
        """
        Deactivate maintenance.
        """

        maintenance.is_active = False
        maintenance.save(update_fields=["is_active"])

    @staticmethod
    @transaction.atomic
    def deactivate_expired():
        """
        Disable every expired maintenance.
        """

        return Maintenance.objects.filter(
            is_active=True,
            end_date__lt=timezone.now(),
        ).update(
            is_active=False
        )

    @staticmethod
    def current():
        """
        Alias of get_active().
        """

        return MaintenanceService.get_active()