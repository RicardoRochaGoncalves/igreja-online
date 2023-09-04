from django.urls import path

from igreja_online.views import endereco_views as views


urlpatterns = [
    path('', views.getEnderecos, name='enderecos'),
    path('create/', views.createEndereco, name='endereco-create'),
    path('update/<str:pk>/', views.updateEndereco, name='endereco-update'),
    path('delete/<str:pk>/', views.deleteEndereco, name='endereco-delete'),
    path('<str:pk>/', views.getEndereco, name='get-endereco')
]