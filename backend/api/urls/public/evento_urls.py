from django.urls import path
from api.views.public import evento_views as views

urlpatterns = [
    path('', views.EventoListView.as_view(), name='evento-list'),
    path('create/', views.EventoCreateView.as_view(), name='evento-create'),
    path('update/<str:pk>/', views.EventoUpdateView.as_view(), name='evento-update'),
    path('delete/<str:pk>/', views.EventoDeleteView.as_view(), name='evento-delete'),
    path('<str:pk>/', views.EventoDetailView.as_view(), name='evento-detail'),
]