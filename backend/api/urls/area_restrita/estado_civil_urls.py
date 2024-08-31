from django.urls import path
from api.views.area_restrita import estado_civil_views as views

urlpatterns = [
    path('', views.EstadoCivilListView.as_view(), name='estado-civil-list'),
    path('create/', views.EstadoCivilCreateView.as_view(), name='estado-civil-create'),
    path('update/<str:pk>/', views.EstadoCivilUpdateView.as_view(), name='estado-civil-update'),
    path('delete/<str:pk>/', views.EstadoCivilDeleteView.as_view(), name='estado-civil-delete'),
    path('<str:pk>/', views.EstadoCivilDetailView.as_view(), name='estado-civil-detail'),
]