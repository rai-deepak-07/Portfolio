from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.models import Maintenance
from apps.portfolio.api.serializers import MaintenanceSerializer


class MaintenanceViewSet(ReadOnlyModelViewSet):
    """
    GET /api/v1/maintenance/
    """

    serializer_class = MaintenanceSerializer
    permission_classes = [AllowAny]

    queryset = Maintenance.objects.filter(
        is_active=True
    )