from rest_framework import serializers

from apps.portfolio.models import PortfolioConfiguration


class PortfolioConfigurationSerializer(serializers.ModelSerializer):
    """
    Serializer for Portfolio Configuration.
    """

    class Meta:
        model = PortfolioConfiguration
        fields = "__all__"

    def get_media_url(self, file):
        """
        Returns absolute media URL.
        """

        if not file:
            return None

        request = self.context.get("request")

        if request:
            return request.build_absolute_uri(file.url)

        return file.url

    def to_representation(self, instance):
        return {

            # ----------------------------------
            # Website
            # ----------------------------------

            "website": {
                "site_name": instance.site_name,
                "site_title": instance.site_title,
                "site_tagline": instance.site_tagline,
                "short_description": instance.short_description,
                "site_url": instance.site_url,
                "backend_url": instance.backend_url,
                "logo": self.get_media_url(instance.logo),
                "favicon": self.get_media_url(instance.favicon),
                "resume": self.get_media_url(instance.resume),
            },

            # ----------------------------------
            # Contact
            # ----------------------------------

            "contact": {
                "email": {
                    "value": instance.email,
                    "icon": instance.email_icon,
                },
                "mobile": {
                    "value": instance.mobile_number,
                    "icon": instance.mobile_icon,
                },
                "country": {
                    "value": instance.country,
                    "icon": instance.country_icon,
                },
                "website": {
                    "value": instance.website,
                    "icon": instance.website_icon,
                },
            },

            # ----------------------------------
            # Social
            # ----------------------------------

            "social": {
                "github": {
                    "value": instance.github_url,
                    "icon": instance.github_icon,
                },
                "linkedin": {
                    "value": instance.linkedin_url,
                    "icon": instance.linkedin_icon,
                },
                "leetcode": {
                    "value": instance.leetcode_url,
                    "icon": instance.leetcode_icon,
                },
                "hackerrank": {
                    "value": instance.hackerrank_url,
                    "icon": instance.hackerrank_icon,
                },
                "codeforces": {
                    "value": instance.codeforces_url,
                    "icon": instance.codeforces_icon,
                },
                "codechef": {
                    "value": instance.codechef_url,
                    "icon": instance.codechef_icon,
                },
                "twitter": {
                    "value": instance.twitter_url,
                    "icon": instance.twitter_icon,
                },
                "instagram": {
                    "value": instance.instagram_url,
                    "icon": instance.instagram_icon,
                },
                "youtube": {
                    "value": instance.youtube_url,
                    "icon": instance.youtube_icon,
                },
            },

            # ----------------------------------
            # SEO
            # ----------------------------------

            "seo": {
                "meta_title": instance.meta_title,
                "meta_description": instance.meta_description,
                "meta_keywords": instance.meta_keywords,
            },

            # ----------------------------------
            # Footer
            # ----------------------------------

            "footer": {
                "copyright_text": instance.copyright_text,
                "footer_text": instance.footer_text,
            },
        }