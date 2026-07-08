from django.contrib import admin
from unfold.admin import ModelAdmin

from apps.portfolio.models import SkillCategory, Skill


class SkillInline(admin.TabularInline):
    model = Skill
    extra = 1
    fields = (
        "name",
        "proficiency",
        "icon",
        "display_order",
    )


@admin.register(SkillCategory)
class SkillCategoryAdmin(ModelAdmin):

    inlines = [SkillInline]

    list_display = (
        "title",
        "display_order",
        "created_at",
    )

    search_fields = (
        "title",
    )

    ordering = (
        "display_order",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )


@admin.register(Skill)
class SkillAdmin(ModelAdmin):

    list_display = (
        "name",
        "category",
        "proficiency",
        "display_order",
    )

    search_fields = (
        "name",
    )

    list_filter = (
        "category",
    )

    ordering = (
        "category",
        "display_order",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )