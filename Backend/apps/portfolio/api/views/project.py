from django.db.models import Prefetch
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.models import Project, ProjectImage
from apps.portfolio.api.serializers import (
    ProjectListSerializer,
    ProjectDetailSerializer,
)


class ProjectViewSet(ReadOnlyModelViewSet):
    """
    Read-only API for portfolio projects.

    Supported query parameters:
        ?featured=true
        ?show_on_home=true
        ?category=<category-slug>
        ?status=LIVE
    """

    permission_classes = (AllowAny,)
    lookup_field = "slug"

    queryset = (
        Project.objects
        .filter(is_active=True)
        .select_related("category")
        .prefetch_related(
            "technologies",
            Prefetch(
                "images",
                queryset=ProjectImage.objects.order_by("id"),
            ),
        )
        .order_by("display_order", "title")
    )

    def get_serializer_class(self):
        if self.action == "retrieve":
            return ProjectDetailSerializer
        return ProjectListSerializer

    def get_queryset(self):
        queryset = super().get_queryset()

        featured = self.request.query_params.get("featured")
        if featured:
            queryset = queryset.filter(
                featured=featured.lower() == "true"
            )

        show_on_home = self.request.query_params.get("show_on_home")
        if show_on_home:
            queryset = queryset.filter(
                show_on_home=show_on_home.lower() == "true"
            )

        category = self.request.query_params.get("category")
        if category:
            queryset = queryset.filter(
                category__slug=category
            )

        status = self.request.query_params.get("status")
        if status:
            queryset = queryset.filter(
                status=status.upper()
            )

        search = self.request.query_params.get("search")
        if search:
            queryset = queryset.filter(
                title__icontains=search
            )

        return queryset
