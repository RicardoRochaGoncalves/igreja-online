from django.urls import path
from igreja_online.views import genero_views as views

urlpatterns = [
    path('', views.getGeneros, name='generos'),   
    path('create/', views.createGenero, name='genero-create'),
    path('update/<str:pk>/', views.updateGenero, name='genero-update'),
    path('delete/<str:pk>/', views.deleteGenero, name='genero-delete'),
]