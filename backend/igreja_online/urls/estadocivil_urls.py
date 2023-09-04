from django.urls import path
from igreja_online.views import estadocivil_views as views

urlpatterns = [
    path('', views.getEstadosCivis, name='estadoscivis'),
    path('create/', views.createEstadoCivil, name='estadocivil-create'),
    path('update/<str:pk>/', views.updateEstadoCivil, name='estadocivil-update'),
    path('delete/<str:pk>/', views.deleteEstadoCivil, name='estadocivil-delete'),
    path('<str:pk>/', views.getEstadoCivil, name='get-estadocivil')
]