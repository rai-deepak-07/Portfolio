from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.api.serializers import StatisticSerializer
from apps.portfolio.models import Statistic


class StatisticViewSet(ReadOnlyModelViewSet):
    """
    GET /api/v1/statistics/
    """

    serializer_class = StatisticSerializer
    permission_classes = [AllowAny]
    pagination_class = None

    def get_queryset(self):
        """
        Returns active statistics ordered by display order.
        """

        return (
            Statistic.objects.filter(
                is_active=True
            )
            .order_by(
                "display_order"
            )
        )