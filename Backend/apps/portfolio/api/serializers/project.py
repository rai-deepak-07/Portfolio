from rest_framework import serializers

from apps.portfolio.models import (
    Project,
    ProjectImage,
    ProjectCategory,
    Technology,
)


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = (
            "id",
            "name",
        )


class ProjectCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectCategory
        fields = (
            "id",
            "name",
            "slug",
            "icon",
        )


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = (
            "id",
            "image",
            "created_at",
        )


class ProjectListSerializer(serializers.ModelSerializer):

    category = ProjectCategorySerializer(read_only=True)

    technologies = TechnologySerializer(
        many=True,
        read_only=True,
    )

    status_display = serializers.CharField(
        source="get_status_display",
        read_only=True,
    )

    project_type_display = serializers.CharField(
        source="get_project_type_display",
        read_only=True,
    )

    class Meta:
        model = Project
        fields = (
            "id",
            "uuid",
            "title",
            "slug",
            "category",
            "technologies",
            "short_description",
            "thumbnail",
            "status",
            "status_display",

            # 👇 You forgot this
            "project_type",
            "project_type_display",

            "featured",
            "show_on_home",
            "project_year",
            "live_url",
            "github_url",
        )


class ProjectDetailSerializer(serializers.ModelSerializer):
    category = ProjectCategorySerializer(read_only=True)
    technologies = TechnologySerializer(many=True, read_only=True)
    images = ProjectImageSerializer(many=True, read_only=True)

    status_display = serializers.CharField(
        source="get_status_display",
        read_only=True,
    )

    project_type_display = serializers.CharField(
        source="get_project_type_display",
        read_only=True,
    )

    class Meta:
        model = Project
        fields = (
            "id",
            "uuid",
            "title",
            "slug",
            "category",
            "technologies",
            "short_description",
            "description",
            "thumbnail",
            "images",
            "status",
            "status_display",
            "project_type",
            "project_type_display",
            "client",
            "duration",
            "project_year",
            "featured",
            "show_on_home",
            "is_active",
            "github_url",
            "live_url",
            "demo_video_url",
            "figma_url",
            "created_at",
            "updated_at",
        )
