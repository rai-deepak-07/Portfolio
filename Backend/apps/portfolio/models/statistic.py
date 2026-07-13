from django.db import models

from apps.common.models import TimeStampedModel


class Statistic(TimeStampedModel):
    """
    Portfolio statistics displayed on the homepage.

    Examples:
    - Projects Completed
    - DSA Problems
    - Technologies
    - API Reliability
    """

    title = models.CharField(
        max_length=100,
        unique=True,
        help_text="Example: Projects Completed"
    )

    value = models.CharField(
        max_length=50,
        help_text="Example: 25+, 100+, 99%"
    )

    description = models.TextField(
        max_length=300,
        help_text="Short description displayed below the title."
    )

    icon = models.CharField(
        max_length=100,
        help_text="Lucide React icon name. Example: FolderGit2"
    )

    display_order = models.PositiveIntegerField(
        default=1,
        db_index=True,
        help_text="Controls the display order on the homepage."
    )

    is_active = models.BooleanField(
        default=True
    )

    class Meta:
        db_table = "portfolio_statistics"
        ordering = (
            "display_order",
            "title",
        )
        verbose_name = "Statistic"
        verbose_name_plural = "Statistics"

    def __str__(self):
        return f"{self.display_order}. {self.title}"