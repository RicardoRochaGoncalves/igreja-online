"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
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
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    # Área restrita
    path('api/area-restrita/categoria-pessoa/', include('api.urls.area_restrita.categoria_pessoa_urls')),
    path('api/area-restrita/genero/', include('api.urls.area_restrita.genero_urls')),
    path('api/area-restrita/igreja/', include('api.urls.area_restrita.igreja_urls')),
    path('api/area-restrita/profissao/', include('api.urls.area_restrita.profissao_urls')),    
    path('api/area-restrita/estado-civil/', include('api.urls.area_restrita.estado_civil_urls')),
    path('api/area-restrita/pessoa/', include('api.urls.area_restrita.pessoa_urls')),

    # Público
    path('api/public/carrossel-imagem/', include('api.urls.public.carrossel_imagem_urls')),
    path('api/public/categoria-noticia/', include('api.urls.public.categoria_noticia_urls')),
    path('api/public/noticia/', include('api.urls.public.noticia_urls')),
    path('api/public/evento/', include('api.urls.public.evento_urls')),
    path('api/public/evento-ao-vivo/', include('api.urls.public.evento_ao_vivo_urls')),
    path('api/public/versiculo/', include('api.urls.public.versiculo_urls')),
    path('api/public/agenda/', include('api.urls.public.agenda_urls')),
    path('api/public/categoria-agenda/', include('api.urls.public.categoria_agenda_urls')),

    # User
    path('api/users/', include('api.urls.user.user_urls')),

    # Utils
    path('api/utils/upload-image/', include('api.urls.utils.upload_image_urls')),

]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)