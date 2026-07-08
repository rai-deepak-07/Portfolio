from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.models import Statistic
from apps.portfolio.api.serializers import StatisticSerializer


class StatisticViewSet(ReadOnlyModelViewSet):
    """
    GET /api/v1/statistics/
    """

    serializer_class = StatisticSerializer
    permission_classes = [AllowAny]

    queryset = Statistic.objects.filter(
        is_active=True
    )