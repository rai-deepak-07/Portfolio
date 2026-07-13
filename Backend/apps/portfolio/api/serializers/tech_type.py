from rest_framework import serializers

from apps.portfolio.models import TechnologyType


class TechnologyTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = TechnologyType
        fields = (
            "id",
            "name",
            "display_order",
            "is_active",
        )

        read_only_fields = (
            "id",
        )