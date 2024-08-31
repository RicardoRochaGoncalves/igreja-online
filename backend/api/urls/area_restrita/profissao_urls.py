from django.urls import path
from api.views.area_restrita import profissao_views as views

urlpatterns = [
    path('', views.ProfissaoListView.as_view(), name='profissao-list'),
    path('create/', views.ProfissaoCreateView.as_view(), name='profissao-create'),
    path('update/<str:pk>/', views.ProfissaoUpdateView.as_view(), name='profissao-update'),
    path('delete/<str:pk>/', views.ProfissaoDeleteView.as_view(), name='profissao-delete'),
    path('<str:pk>/', views.ProfissaoDetailView.as_view(), name='profissao-detail'),
]