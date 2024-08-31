from django.urls import path
from api.views.public import categoria_agenda_views as views

urlpatterns = [
    path('', views.CategoriaAgendaListView.as_view(), name='categoria-agenda-list'),
    path('create/', views.CategoriaAgendaCreateView.as_view(), name='categoria-agenda-create'),
    path('update/<str:pk>/', views.CategoriaAgendaUpdateView.as_view(), name='categoria-agenda-update'),
    path('delete/<str:pk>/', views.CategoriaAgendaDeleteView.as_view(), name='categoria-agenda-delete'),
    path('<str:pk>/', views.CategoriaAgendaDetailView.as_view(), name='categoria-agenda-detail'),
]

