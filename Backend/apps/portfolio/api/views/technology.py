from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.models import Technology
from apps.portfolio.api.serializers import TechnologySerializer


class TechnologyViewSet(ReadOnlyModelViewSet):

    serializer_class = TechnologySerializer
    permission_classes = [AllowAny]

    queryset = (
        Technology.objects
        .filter(is_active=True)
        .select_related("tech_type")
        .order_by("display_order")
    )