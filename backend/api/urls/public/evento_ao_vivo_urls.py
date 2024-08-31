from django.urls import path
from api.views.public import evento_ao_vivo_views as views

urlpatterns = [
    path('', views.EventoAoVivoListView.as_view(), name='evento-ao-vivo-list'),
    path('create/', views.EventoAoVivoCreateView.as_view(), name='evento-ao-vivo-create'),
    path('update/<str:pk>/', views.EventoAoVivoUpdateView.as_view(), name='evento-ao-vivo-update'),
    path('delete/<str:pk>/', views.EventoAoVivoDeleteView.as_view(), name='evento-ao-vivo-delete'),
    path('<str:pk>/', views.EventoAoVivoDetailView.as_view(), name='evento-ao-vivo-detail'),
]
