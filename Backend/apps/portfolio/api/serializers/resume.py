from rest_framework import serializers

from apps.portfolio.models import ResumeSection, ResumeEntry


class ResumeEntrySerializer(serializers.ModelSerializer):

    class Meta:
        model = ResumeEntry
        fields = (
            "id",
            "title",
            "organization",
            "location",
            "start_date",
            "end_date",
            "currently_active",
            "description",
            "display_order",
        )


class ResumeSectionSerializer(serializers.ModelSerializer):

    entries = ResumeEntrySerializer(
        many=True,
        read_only=True,
    )

    class Meta:
        model = ResumeSection
        fields = (
            "id",
            "title",
            "display_order",
            "entries",
        )