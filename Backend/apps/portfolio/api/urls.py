from django.urls import path
from rest_framework.routers import DefaultRouter

from apps.portfolio.api.views import (
    AboutViewSet,
    CategoryViewSet,
    TechnologyViewSet,
    ServiceViewSet,
    ProjectViewSet,
    ResumeViewSet,
    SkillViewSet,
    CertificateViewSet,
    StatisticViewSet,
    MaintenanceViewSet,
    ContactCreateAPIView,
)

app_name = "portfolio-api"

router = DefaultRouter()

router.register(r"about", AboutViewSet, basename="about",)

router.register(r"categories", CategoryViewSet, basename="categories",)

router.register(r"technologies", TechnologyViewSet, basename="technologies",)

router.register(r"services", ServiceViewSet, basename="services",)

router.register(r"projects", ProjectViewSet, basename="projects",)

router.register(r"resume", ResumeViewSet, basename="resume",)

router.register(r"skills", SkillViewSet, basename="skills",)

router.register(r"certificates", CertificateViewSet, basename="certificates",)

router.register(r"statistics", StatisticViewSet, basename="statistics",)

router.register(r"maintenance", MaintenanceViewSet, basename="maintenance",)

urlpatterns = [
    path("contact/", ContactCreateAPIView.as_view(), name="contact",),
]

urlpatterns += router.urls