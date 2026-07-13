from django.contrib import admin
from django.utils.html import format_html

from unfold.admin import ModelAdmin

from apps.portfolio.models import PortfolioConfiguration


@admin.register(PortfolioConfiguration)
class PortfolioConfigurationAdmin(ModelAdmin):
    """
    Admin configuration for Portfolio Configuration.
    """

    list_display = (
        "logo_preview",
        "site_name",
        "site_title",
        "email",
        "mobile_number",
        "is_active",
        "updated_at",
    )

    list_display_links = (
        "site_name",
    )

    search_fields = (
        "site_name",
        "site_title",
        "email",
        "country",
    )

    list_filter = (
        "is_active",
        "is_resume_public",
        "is_email_public",
        "is_mobile_public",
    )

    ordering = (
        "-updated_at",
    )

    readonly_fields = (
        "logo_preview",
        "favicon_preview",
        "created_at",
        "updated_at",
    )

    fieldsets = (
        (
            "Website Information",
            {
                "fields": (
                    "site_name",
                    "site_title",
                    "site_tagline",
                    "short_description",
                    "site_url",
                    "backend_url",
                )
            },
        ),
        (
            "Branding",
            {
                "fields": (
                    "logo",
                    "logo_preview",
                    "favicon",
                    "favicon_preview",
                    "resume",
                )
            },
        ),
        (
            "Contact Information",
            {
                "fields": (
                    ("email", "email_icon"),
                    ("mobile_number", "mobile_icon"),
                    ("country", "country_icon"),
                    ("website", "website_icon"),
                )
            },
        ),
        (
            "Social Links",
            {
                "fields": (
                    ("github_url", "github_icon"),
                    ("linkedin_url", "linkedin_icon"),
                    ("leetcode_url", "leetcode_icon"),
                    ("hackerrank_url", "hackerrank_icon"),
                    ("codeforces_url", "codeforces_icon"),
                    ("codechef_url", "codechef_icon"),
                    ("twitter_url", "twitter_icon"),
                    ("instagram_url", "instagram_icon"),
                    ("youtube_url", "youtube_icon"),
                )
            },
        ),
        (
            "SEO",
            {
                "classes": ("collapse",),
                "fields": (
                    "meta_title",
                    "meta_description",
                    "meta_keywords",
                )
            },
        ),
        (
            "Footer",
            {
                "fields": (
                    "copyright_text",
                    "footer_text",
                )
            },
        ),
        (
            "Visibility",
            {
                "fields": (
                    "is_resume_public",
                    "is_email_public",
                    "is_mobile_public",
                    "is_active",
                )
            },
        ),
        (
            "System",
            {
                "classes": ("collapse",),
                "fields": (
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    def logo_preview(self, obj):
        if obj.logo:
            return format_html(
                '<img src="{}" width="120" style="border-radius:10px;object-fit:contain;background:#fff;padding:8px;" />',
                obj.logo.url,
            )
        return "-"

    logo_preview.short_description = "Logo Preview"

    def favicon_preview(self, obj):
        if obj.favicon:
            return format_html(
                '<img src="{}" width="48" height="48" style="border-radius:8px;background:#fff;padding:6px;" />',
                obj.favicon.url,
            )
        return "-"

    favicon_preview.short_description = "Favicon Preview"

    def has_add_permission(self, request):
        """
        Allow only one Portfolio Configuration.
        """
        if PortfolioConfiguration.objects.exists():
            return False

        return super().has_add_permission(request)