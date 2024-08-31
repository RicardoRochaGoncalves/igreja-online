from django.urls import path
from api.views.public import versiculo_views as views

urlpatterns = [
    path('', views.VersiculoListView.as_view(), name='versiculo-list'),
    path('create/', views.VersiculoCreateView.as_view(), name='versiculo-create'),
    path('update/<str:pk>/', views.VersiculoUpdateView.as_view(), name='versiculo-update'),
    path('delete/<str:pk>/', views.VersiculoDeleteView.as_view(), name='versiculo-delete'),
    path('<str:pk>/', views.VersiculoDetailView.as_view(), name='versiculo-detail'),
]