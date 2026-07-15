"""
NOTE: The `Certificate` model was removed from this app.

This module only exists to keep migration 0001_initial.py importable,
since it references `certificate_upload_path` for a historical
ImageField definition. Do NOT add a Certificate model back here -
if you need it again, generate a fresh migration instead of reviving
this file.
"""


def certificate_upload_path(instance, filename):
    return f"portfolio/certificates/{filename}"
