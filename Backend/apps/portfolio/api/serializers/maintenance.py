from rest_framework import serializers

from apps.portfolio.models import Maintenance


class MaintenanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Maintenance
        fields = "__all__"

        read_only_fields = (
            "id",
            "created_at",
            "updated_at",
        )