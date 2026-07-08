from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.models import Technology
from apps.portfolio.api.serializers import TechnologySerializer


class TechnologyViewSet(ReadOnlyModelViewSet):

    serializer_class = TechnologySerializer
    queryset = Technology.objects.select_related("category")
    permission_classes = [AllowAny]