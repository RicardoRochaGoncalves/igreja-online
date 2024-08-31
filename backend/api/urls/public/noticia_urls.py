from django.urls import path
from api.views.public import noticia_views as views

urlpatterns = [
    path('', views.NoticiaListView.as_view(), name='noticia-list'),
    path('create/', views.NoticiaCreateView.as_view(), name='noticia-create'),
    path('update/<str:pk>/', views.NoticiaUpdateView.as_view(), name='noticia-update'),
    path('delete/<str:pk>/', views.NoticiaDeleteView.as_view(), name='noticia-delete'),
    path('<str:pk>/', views.NoticiaDetailView.as_view(), name='noticia-detail'),
]

