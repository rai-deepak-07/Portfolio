from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.api.serializers import MaintenanceSerializer
from apps.portfolio.models import Maintenance
from apps.portfolio.services import MaintenanceService


class MaintenanceViewSet(ReadOnlyModelViewSet):
    """
    Read-only endpoint that returns only the currently active
    maintenance schedule.

    GET /api/v1/maintenance/
    """

    serializer_class = MaintenanceSerializer
    permission_classes = [AllowAny]
    pagination_class = None

    def get_queryset(self):
        """
        Returns a queryset containing only the active maintenance
        record, if one exists.
        """

        maintenance = MaintenanceService.get_active()

        if maintenance:
            return Maintenance.objects.filter(pk=maintenance.pk)

        return Maintenance.objects.none()