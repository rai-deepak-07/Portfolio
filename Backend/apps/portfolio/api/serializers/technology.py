from rest_framework import serializers

from apps.portfolio.models import Technology


class TechnologySerializer(serializers.ModelSerializer):

    category_name = serializers.CharField(
        source="category.name",
        read_only=True
    )

    class Meta:
        model = Technology
        fields = (
            "id",
            "name",
            "category",
            "category_name",
            "created_at",
            "updated_at",
        )
        read_only_fields = (
            "id",
            "created_at",
            "updated_at",
        )