from django.contrib import admin
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser
from .models import *
 

# Register your models here.
class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['username', 'email', 'is_staff']
    fieldsets = (
        *UserAdmin.fieldsets,
        (
            'Profile',
            {
                'fields':(
                    'role',
                )
            }
        )
    )
    
admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Patient)
admin.site.register(Consultation)
admin.site.register(Medicament)
admin.site.register(Examen)
admin.site.register(Drog)
admin.site.register(Exam)


