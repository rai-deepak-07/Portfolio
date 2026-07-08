from rest_framework import serializers

from apps.portfolio.models import SkillCategory, Skill


class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = Skill
        fields = (
            "id",
            "name",
            "proficiency",
            "icon",
            "display_order",
        )


class SkillCategorySerializer(serializers.ModelSerializer):

    skills = SkillSerializer(
        many=True,
        read_only=True,
    )

    class Meta:
        model = SkillCategory
        fields = (
            "id",
            "title",
            "display_order",
            "skills",
        )