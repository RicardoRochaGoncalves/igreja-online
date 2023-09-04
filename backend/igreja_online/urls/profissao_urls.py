from django.urls import path

from igreja_online.views import profissao_views as views

urlpatterns = [
    path('', views.getProfissoes, name='profissoes'),
    path('create/', views.createProfissao, name='profissao-create'),
    path('update/<str:pk>/', views.updateProfissao, name='profissao-update'),
    path('delete/<str:pk>/', views.deleteProfissao, name='profissao-delete'),
    path('<str:pk>/', views.getProfissao, name='get-profissao')
]