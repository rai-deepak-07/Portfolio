from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.models import Project
from apps.portfolio.api.serializers import ProjectSerializer


class ProjectViewSet(ReadOnlyModelViewSet):

    serializer_class = ProjectSerializer

    permission_classes = [AllowAny]

    lookup_field = "slug"

    queryset = (
        Project.objects
        .select_related("technology")
        .prefetch_related("images")
    )