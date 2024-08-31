from django.urls import path
from api.views.public import categoria_noticia_views as views

urlpatterns = [
    path('', views.CategoriaNoticiaListView.as_view(), name='categoria-noticia-list'),
    path('create/', views.CategoriaNoticiaCreateView.as_view(), name='categoria-noticia-create'),
    path('update/<str:pk>/', views.CategoriaNoticiaUpdateView.as_view(), name='categoria-noticia-update'),
    path('delete/<str:pk>/', views.CategoriaNoticiaDeleteView.as_view(), name='categoria-noticia-delete'),
    path('<str:pk>/', views.CategoriaNoticiaDetailView.as_view(), name='categoria-noticia-detail'),
]