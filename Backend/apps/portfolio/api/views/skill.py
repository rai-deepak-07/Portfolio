from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.models import SkillCategory
from apps.portfolio.api.serializers import SkillCategorySerializer


class SkillViewSet(ReadOnlyModelViewSet):
    """
    GET /api/v1/skills/
    """

    serializer_class = SkillCategorySerializer
    permission_classes = [AllowAny]

    queryset = (
        SkillCategory.objects
        .prefetch_related("skills")
        .all()
    )