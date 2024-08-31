from django.urls import path
from api.views.utils import upload_image_views as views

urlpatterns = [
    path('', views.upload_image, name='upload-image'),
]