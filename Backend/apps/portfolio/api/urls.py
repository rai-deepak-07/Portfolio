from django.urls import path
from rest_framework.routers import DefaultRouter

from apps.portfolio.api.views import (
    PortfolioConfigurationViewSet,
    StatisticViewSet,
    TechnologyTypeViewSet,
    ServiceViewSet,
    TechnologyViewSet,
    FAQViewSet,
    MaintenanceViewSet,
    ProjectViewSet,
)

app_name = "portfolio-api"

router = DefaultRouter()

# Configuration
router.register(
    r"configuration",
    PortfolioConfigurationViewSet,
    basename="configuration",
)

# Technology
router.register(
    r"tech-types",
    TechnologyTypeViewSet,
    basename="tech-types",
)

router.register(
    r"technologies",
    TechnologyViewSet,
    basename="technologies",
)

# Portfolio
router.register(
    r"services",
    ServiceViewSet,
    basename="services",
)

router.register(
    r"projects",
    ProjectViewSet,
    basename="projects",
)

router.register(
    r"statistics",
    StatisticViewSet,
    basename="statistics",
)

router.register(
    r"faqs",
    FAQViewSet,
    basename="faqs",
)

router.register(
    r"maintenance",
    MaintenanceViewSet,
    basename="maintenance",
)

urlpatterns = []

urlpatterns += router.urls