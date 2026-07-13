from rest_framework import serializers

from apps.portfolio.models import Statistic


class StatisticSerializer(serializers.ModelSerializer):
    """
    Serializer for portfolio statistics.
    """

    class Meta:
        model = Statistic

        fields = (
            "id",
            "title",
            "value",
            "description",
            "icon",
        )

        read_only_fields = fields