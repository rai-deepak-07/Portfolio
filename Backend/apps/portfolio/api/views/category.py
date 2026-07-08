from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ReadOnlyModelViewSet

from apps.portfolio.models import Category
from apps.portfolio.api.serializers import CategorySerializer


class CategoryViewSet(ReadOnlyModelViewSet):

    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    permission_classes = [AllowAny]