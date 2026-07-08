from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.models import Certificate
from apps.portfolio.api.serializers import CertificateSerializer


class CertificateViewSet(ReadOnlyModelViewSet):
    """
    GET /api/v1/certificates/
    """

    serializer_class = CertificateSerializer
    permission_classes = [AllowAny]

    queryset = Certificate.objects.all()