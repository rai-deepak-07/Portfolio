from rest_framework import serializers

from apps.portfolio.models import Project
from apps.portfolio.models import ProjectImage


class ProjectImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProjectImage
        fields = (
            "id",
            "image",
            "created_at",
        )


class ProjectSerializer(serializers.ModelSerializer):

    technology_name = serializers.CharField(
        source="technology.name",
        read_only=True
    )

    images = ProjectImageSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Project
        fields = (
            "id",
            "uuid",
            "title",
            "slug",
            "technology",
            "technology_name",
            "description",
            "github_url",
            "live_url",
            "thumbnail",
            "featured",
            "images",
            "created_at",
            "updated_at",
        )

        read_only_fields = (
            "id",
            "uuid",
            "slug",
            "created_at",
            "updated_at",
        )