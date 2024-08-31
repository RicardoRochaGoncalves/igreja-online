from django.urls import path
from api.views.public import carrossel_imagem_views as views

urlpatterns = [
    path('', views.CarrosselImagemListView.as_view(), name='carrossel-imagem-list'),
    path('create/', views.CarrosselImagemCreateView.as_view(), name='carrossel-imagem-create'),
    path('update/<str:pk>/', views.CarrosselImagemUpdateView.as_view(), name='carrossel-imagem-update'),
    path('delete/<str:pk>/', views.CarrosselImagemDeleteView.as_view(), name='carrossel-imagem-delete'),
    path('<str:pk>/', views.CarrosselImagemDetailView.as_view(), name='carrossel-imagem-detail'),
]