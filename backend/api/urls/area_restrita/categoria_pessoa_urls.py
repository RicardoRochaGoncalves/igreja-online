from django.urls import path
from api.views.area_restrita import categoria_pessoa_views as views

urlpatterns = [
    path('', views.CategoriaPessoaListView.as_view(), name='categoria-pessoa-list'),
    path('create/', views.CategoriaPessoaCreateView.as_view(), name='categoria-pessoa-create'),
    path('update/<str:pk>/', views.CategoriaPessoaUpdateView.as_view(), name='categoria-pessoa-update'),
    path('delete/<str:pk>/', views.CategoriaPessoaDeleteView.as_view(), name='categoria-pessoa-delete'),
    path('<str:pk>/', views.CategoriaPessoaDetailView.as_view(), name='categoria-pessoa-detail'),
]