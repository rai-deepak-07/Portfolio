from django.contrib import admin
from django.utils.html import format_html

from unfold.admin import ModelAdmin
from django.db import transaction

from apps.portfolio.models import (
    Project,
    ProjectImage,
    ProjectCategory,
)


class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1
    fields = ("image",)
    verbose_name = "Project Image"
    verbose_name_plural = "Project Images"


@admin.register(ProjectCategory)
class ProjectCategoryAdmin(ModelAdmin):
    list_display = (
        "name",
        "display_order",
        "is_active",
        "created_at",
    )

    list_filter = (
        "is_active",
    )

    search_fields = (
        "name",
    )

    ordering = (
        "display_order",
        "name",
    )

    readonly_fields = (
        "slug",
        "created_at",
        "updated_at",
    )

    fieldsets = (
        (
            "Category Information",
            {
                "fields": (
                    "name",
                    "slug",
                    "icon",
                )
            },
        ),
        (
            "Settings",
            {
                "fields": (
                    "display_order",
                    "is_active",
                )
            },
        ),
        (
            "System Information",
            {
                "classes": ("collapse",),
                "fields": (
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    def get_changeform_initial_data(self, request):
        initial = super().get_changeform_initial_data(request)

        last_display_order = (
            ProjectCategory.objects
            .order_by("-display_order")
            .values_list("display_order", flat=True)
            .first()
        )

        initial["display_order"] = (last_display_order or 0) + 1

        return initial


    @transaction.atomic
    def save_model(self, request, obj, form, change):
        if change:
            old_obj = ProjectCategory.objects.select_for_update().get(pk=obj.pk)

            if old_obj.display_order != obj.display_order:
                swap_obj = (
                    ProjectCategory.objects
                    .select_for_update()
                    .filter(display_order=obj.display_order)
                    .exclude(pk=obj.pk)
                    .first()
                )

                if swap_obj:
                    swap_order = swap_obj.display_order
                    swap_obj.display_order = old_obj.display_order
                    swap_obj.save(update_fields=["display_order"])

                    obj.display_order = swap_order

        super().save_model(request, obj, form, change)


@admin.register(Project)
class ProjectAdmin(ModelAdmin):
    inlines = [ProjectImageInline]

    filter_horizontal = (
        "technologies",
    )

    list_display = (
        "thumbnail_preview",
        "title",
        "category",
        "status",
        "featured",
        "show_on_home",
        "is_active",
        "display_order",
        "created_at",
    )

    list_filter = (
        "category",
        "status",
        "featured",
        "show_on_home",
        "is_active",
        "project_type",
        "technologies",
    )

    search_fields = (
        "title",
        "short_description",
        "description",
        "client",
    )

    ordering = (
        "display_order",
        "title",
    )

    readonly_fields = (
        "slug",
        "uuid",
        "thumbnail_preview",
        "created_at",
        "updated_at",
    )

    fieldsets = (
        (
            "Project Information",
            {
                "fields": (
                    "title",
                    "slug",
                    "category",
                    "technologies",
                    "status",
                    "project_type",
                    "short_description",
                    "description",
                )
            },
        ),
        (
            "Project Details",
            {
                "fields": (
                    "client",
                    "duration",
                    "project_year",
                )
            },
        ),
        (
            "Project Links",
            {
                "fields": (
                    "github_url",
                    "live_url",
                    "demo_video_url",
                    "figma_url",
                )
            },
        ),
        (
            "Media",
            {
                "fields": (
                    "thumbnail",
                    "thumbnail_preview",
                )
            },
        ),
        (
            "Display Settings",
            {
                "fields": (
                    "display_order",
                    "featured",
                    "show_on_home",
                    "is_active",
                )
            },
        ),
        (
            "System Information",
            {
                "classes": ("collapse",),
                "fields": (
                    "uuid",
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    @admin.display(description="Thumbnail")
    def thumbnail_preview(self, obj):
        if obj.thumbnail:
            return format_html(
                '<img src="{}" width="100" height="70" '
                'style="border-radius:8px;object-fit:cover;border:1px solid #ddd;" />',
                obj.thumbnail.url,
            )
        return "-"

    def get_changeform_initial_data(self, request):
        initial = super().get_changeform_initial_data(request)

        last_display_order = (
            Project.objects
            .order_by("-display_order")
            .values_list("display_order", flat=True)
            .first()
        )

        initial["display_order"] = (last_display_order or 0) + 1

        return initial


    @transaction.atomic
    def save_model(self, request, obj, form, change):
        if change:
            old_obj = Project.objects.select_for_update().get(pk=obj.pk)

            if old_obj.display_order != obj.display_order:
                swap_obj = (
                    Project.objects
                    .select_for_update()
                    .filter(display_order=obj.display_order)
                    .exclude(pk=obj.pk)
                    .first()
                )

                if swap_obj:
                    swap_order = swap_obj.display_order
                    swap_obj.display_order = old_obj.display_order
                    swap_obj.save(update_fields=["display_order"])

                    obj.display_order = swap_order

        super().save_model(request, obj, form, change)




@admin.register(ProjectImage)
class ProjectImageAdmin(ModelAdmin):
    list_display = (
        "image_preview",
        "project",
        "created_at",
    )

    search_fields = (
        "project__title",
    )

    readonly_fields = (
        "image_preview",
        "created_at",
        "updated_at",
    )

    @admin.display(description="Preview")
    def image_preview(self, obj):
        if obj.image:
            return format_html(
                '<img src="{}" width="100" height="70" '
                'style="border-radius:8px;object-fit:cover;border:1px solid #ddd;" />',
                obj.image.url,
            )
        return "-"
