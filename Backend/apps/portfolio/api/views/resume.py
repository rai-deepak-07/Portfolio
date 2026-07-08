from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.models import ResumeSection
from apps.portfolio.api.serializers import ResumeSectionSerializer


class ResumeViewSet(ReadOnlyModelViewSet):
    """
    GET /api/v1/resume/
    """

    serializer_class = ResumeSectionSerializer
    permission_classes = [AllowAny]

    queryset = (
        ResumeSection.objects
        .prefetch_related("entries")
        .all()
    )
