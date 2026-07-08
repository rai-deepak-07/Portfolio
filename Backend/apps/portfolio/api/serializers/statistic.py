from rest_framework import serializers

from apps.portfolio.models import Statistic


class StatisticSerializer(serializers.ModelSerializer):

    class Meta:
        model = Statistic
        fields = "__all__"

        read_only_fields = (
            "id",
            "created_at",
            "updated_at",
        )