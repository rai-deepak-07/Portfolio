from rest_framework import serializers

from apps.portfolio.models import Contact


class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = "__all__"

        read_only_fields = (
            "id",
            "created_at",
            "updated_at",
            "is_read",
            "is_replied",
            "replied_at",
            "ip_address",
            "user_agent",
        )