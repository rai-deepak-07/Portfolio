from rest_framework import serializers

from ...models.service import Service


class ServiceSerializer(serializers.ModelSerializer):
    technologies = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field="name"
    )

    class Meta:
        model = Service
        fields = [
            "id",
            "title",
            "short_description",
            "icon",
            "technologies",
            "button_text",
            "button_url",
            "is_featured",
        ]