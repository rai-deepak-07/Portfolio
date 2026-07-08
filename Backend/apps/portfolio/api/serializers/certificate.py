from rest_framework import serializers

from apps.portfolio.models import Certificate


class CertificateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Certificate
        fields = "__all__"

        read_only_fields = (
            "id",
            "created_at",
            "updated_at",
        )