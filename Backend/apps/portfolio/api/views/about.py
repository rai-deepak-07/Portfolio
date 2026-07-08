from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.models import About
from apps.portfolio.api.serializers import AboutSerializer


class AboutViewSet(ReadOnlyModelViewSet):
    """
    Public About API
    GET /api/v1/about/
    """

    serializer_class = AboutSerializer
    queryset = About.objects.all()
    permission_classes = [AllowAny]