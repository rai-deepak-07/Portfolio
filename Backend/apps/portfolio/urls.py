from django.urls import include, path

app_name = "portfolio"

urlpatterns = [
    path("", include("apps.portfolio.api.urls"),),
]