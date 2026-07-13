from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.models import PortfolioConfiguration
from apps.portfolio.api.serializers import (
    PortfolioConfigurationSerializer,
)


class PortfolioConfigurationViewSet(ReadOnlyModelViewSet):
    """
    GET /api/v1/configuration/
    """

    serializer_class = PortfolioConfigurationSerializer
    permission_classes = [AllowAny]
    pagination_class = None

    queryset = PortfolioConfiguration.objects.filter(
        is_active=True
    )

    def list(self, request, *args, **kwargs):
        """
        Returns the active portfolio configuration.
        """

        configuration = self.get_queryset().first()

        if not configuration:
            return Response({})

        serializer = self.get_serializer(configuration)

        return Response(serializer.data)