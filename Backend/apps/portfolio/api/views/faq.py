from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.models import FAQ
from apps.portfolio.api.serializers import FAQSerializer


class FAQViewSet(ReadOnlyModelViewSet):

    serializer_class = FAQSerializer
    permission_classes = [AllowAny]

    queryset = (
        FAQ.objects
        .filter(is_active=True)
        .order_by("display_order")
    )