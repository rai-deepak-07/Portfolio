from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.models import TechnologyType
from apps.portfolio.api.serializers import TechnologyTypeSerializer


class TechnologyTypeViewSet(ReadOnlyModelViewSet):

    serializer_class = TechnologyTypeSerializer
    permission_classes = [AllowAny]

    queryset = (
        TechnologyType.objects
        .filter(is_active=True)
        .order_by("display_order", "name")
    )