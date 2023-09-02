from django.urls import path
from igreja_online.views import igreja_views as views


urlpatterns = [
    path('', views.getIgrejas, name='igrejas'),
    path('create/', views.createIgreja, name='igreja-create'),
    path('update/<str:pk>/', views.updateIgreja, name='igreja-update'),
    path('delete/<str:pk>/', views.deleteIgreja, name='igreja-delete'),
]