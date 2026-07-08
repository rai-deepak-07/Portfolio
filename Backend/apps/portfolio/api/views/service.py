from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.models import Service
from apps.portfolio.api.serializers import ServiceSerializer


class ServiceViewSet(ReadOnlyModelViewSet):

    serializer_class = ServiceSerializer
    queryset = Service.objects.all()
    permission_classes = [AllowAny]