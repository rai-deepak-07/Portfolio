from rest_framework import serializers

from apps.portfolio.models import Technology


class TechnologySerializer(serializers.ModelSerializer):

    tech_type_name = serializers.CharField(
        source="tech_type.name",
        read_only=True,
    )

    class Meta:
        model = Technology
        fields = (
            "id",
            "name",
            "icon",
            "color",
            "tech_type",
            "tech_type_name",
            "display_order",
            "is_active",
        )