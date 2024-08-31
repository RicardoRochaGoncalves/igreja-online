from django.urls import path
from api.views.area_restrita import genero_views as views

urlpatterns = [
    path('', views.GeneroListView.as_view(), name='genero-list'),
    path('create/', views.GeneroCreateView.as_view(), name='genero-create'),
    path('update/<str:pk>/', views.GeneroUpdateView.as_view(), name='genero-update'),
    path('delete/<str:pk>/', views.GeneroDeleteView.as_view(), name='genero-delete'),
    path('<str:pk>/', views.GeneroDetailView.as_view(), name='genero-detail'),
]