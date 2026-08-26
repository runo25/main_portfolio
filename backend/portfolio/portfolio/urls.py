"""
URL configuration for portfolio project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# portfolio/portfolio/urls.py
from django.contrib import admin
from django.urls import path, include # Make sure include is here if using Option B
from . import views # If using Option A
from django.conf import settings # Add this
from django.conf.urls.static import static # Add this

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.homepage_view, name='homepage'), # For Option A
    # path('', include('pages.urls')), # For Option B
]

# Add this for serving static files during development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) # If using collectstatic
    # OR if you want to serve directly from STATICFILES_DIRS (simpler for dev without collectstatic yet)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])