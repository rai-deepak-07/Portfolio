from rest_framework import generics
from rest_framework.permissions import AllowAny

from apps.portfolio.models import Contact
from apps.portfolio.api.serializers import ContactSerializer


class ContactCreateAPIView(generics.CreateAPIView):
    """
    POST /api/v1/contact/
    """

    serializer_class = ContactSerializer
    permission_classes = [AllowAny]
    queryset = Contact.objects.all()

    def perform_create(self, serializer):
        serializer.save(
            ip_address=self.request.META.get("REMOTE_ADDR"),
            user_agent=self.request.META.get("HTTP_USER_AGENT", ""),
        )