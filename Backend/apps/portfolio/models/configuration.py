from django.core.exceptions import ValidationError
from django.db import models

from apps.common.models import TimeStampedModel


class PortfolioConfiguration(TimeStampedModel):
    """
    Global portfolio configuration.
    Only one record should exist.
    """

    site_name = models.CharField(max_length=100, help_text="Website name. Example: Deepak Raikwar")
    site_title = models.CharField(max_length=200, help_text="Main website title.")
    site_tagline = models.CharField(max_length=250, blank=True, help_text="Short tagline.")
    short_description = models.TextField(max_length=500, help_text="Short portfolio description.")

    site_url = models.URLField(help_text="Frontend URL.")
    backend_url = models.URLField(help_text="Backend URL.")

    logo = models.ImageField(upload_to="portfolio/configuration/logo/", blank=True, null=True, help_text="Website logo.")
    favicon = models.ImageField(upload_to="portfolio/configuration/favicon/", blank=True, null=True, help_text="Website favicon.")
    resume = models.FileField(upload_to="portfolio/configuration/resume/", blank=True, null=True, help_text="Resume PDF.")

    email = models.EmailField(help_text="Public email.")
    email_icon = models.CharField(max_length=100, default="Mail", help_text="Lucide icon name.")
    mobile_number = models.CharField(max_length=20, help_text="Public mobile number.")
    mobile_icon = models.CharField(max_length=100, default="Phone", help_text="Lucide icon name.")
    country = models.CharField(max_length=100, help_text="Country.")
    country_icon = models.CharField(max_length=100, default="MapPinned", help_text="Lucide icon name.")
    website = models.URLField(blank=True, help_text="Personal website.")
    website_icon = models.CharField(max_length=100, default="Globe", help_text="Lucide icon name.")

    github_url = models.URLField(blank=True, help_text="GitHub URL.")
    github_icon = models.CharField(max_length=100, default="Github", help_text="Lucide icon name.")
    linkedin_url = models.URLField(blank=True, help_text="LinkedIn URL.")
    linkedin_icon = models.CharField(max_length=100, default="Linkedin", help_text="Lucide icon name.")
    leetcode_url = models.URLField(blank=True, help_text="LeetCode URL.")
    leetcode_icon = models.CharField(max_length=100, default="Code2", help_text="Lucide icon name.")
    hackerrank_url = models.URLField(blank=True, help_text="HackerRank URL.")
    hackerrank_icon = models.CharField(max_length=100, default="Code", help_text="Lucide icon name.")
    codeforces_url = models.URLField(blank=True, help_text="Codeforces URL.")
    codeforces_icon = models.CharField(max_length=100, default="Terminal", help_text="Lucide icon name.")
    codechef_url = models.URLField(blank=True, help_text="CodeChef URL.")
    codechef_icon = models.CharField(max_length=100, default="ChefHat", help_text="Lucide icon name.")
    twitter_url = models.URLField(blank=True, help_text="X/Twitter URL.")
    twitter_icon = models.CharField(max_length=100, default="Twitter", help_text="Lucide icon name.")
    instagram_url = models.URLField(blank=True, help_text="Instagram URL.")
    instagram_icon = models.CharField(max_length=100, default="Instagram", help_text="Lucide icon name.")
    youtube_url = models.URLField(blank=True, help_text="YouTube URL.")
    youtube_icon = models.CharField(max_length=100, default="Youtube", help_text="Lucide icon name.")

    meta_title = models.CharField(max_length=200, blank=True, help_text="SEO title.")
    meta_description = models.TextField(blank=True, help_text="SEO description.")
    meta_keywords = models.CharField(max_length=500, blank=True, help_text="Comma separated SEO keywords.")

    copyright_text = models.CharField(max_length=300, blank=True, help_text="Footer copyright.")
    footer_text = models.CharField(max_length=300, blank=True, help_text="Footer text.")

    is_resume_public = models.BooleanField(default=True, help_text="Allow resume download.")
    is_email_public = models.BooleanField(default=True, help_text="Show email publicly.")
    is_mobile_public = models.BooleanField(default=True, help_text="Show mobile publicly.")
    is_active = models.BooleanField(default=True, help_text="Enable configuration.")

    class Meta:
        db_table = "portfolio_configuration"
        verbose_name = "Portfolio Configuration"
        verbose_name_plural = "Portfolio Configuration"

    def clean(self):
        super().clean()
        if not self.pk and PortfolioConfiguration.objects.exists():
            raise ValidationError("Only one Portfolio Configuration record is allowed.")

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.site_name
