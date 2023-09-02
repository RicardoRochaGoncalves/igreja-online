from django.urls import path
from igreja_online.views import pessoa_views as views

urlpatterns = [
    path('', views.getPessoas, name='pessoas'),
    path('create/', views.createPessoa, name='pessoa-create'),
    path('update/<str:pk>/', views.updatePessoa, name='pessoa-update'),
    path('delete/<str:pk>/', views.deletePessoa, name='pessoa-delete'),
]