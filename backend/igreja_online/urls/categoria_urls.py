from django.urls import path
from igreja_online.views import categoria_views as views

urlpatterns = [
    path('', views.getCategorias, name='categorias'),
    path('create/', views.createCategoria, name='categoria-create'),
    path('update/<str:pk>/', views.updateCategoria, name='categoria-update'),
    path('delete/<str:pk>/', views.deleteCategoria, name='categoria-delete'),
]