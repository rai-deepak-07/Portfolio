from rest_framework import serializers

from apps.portfolio.models import Maintenance


class MaintenanceSerializer(serializers.ModelSerializer):
    """
    Serializer for the currently active maintenance.
    """

    class Meta:
        model = Maintenance

        fields = (
            "id",
            "title",
            "message",
            "start_date",
            "end_date",
            "show_countdown",
            "allow_admin_access",
            "maintenance_image",
        )

        read_only_fields = fields