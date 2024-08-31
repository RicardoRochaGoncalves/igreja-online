from django.urls import path
from api.views.area_restrita import igreja_views as views

urlpatterns = [
    path('', views.IgrejaListView.as_view(), name='igreja-list'),
    path('create/', views.IgrejaCreateView.as_view(), name='igreja-create'),
    path('update/<str:pk>/', views.IgrejaUpdateView.as_view(), name='igreja-update'),
    path('delete/<str:pk>/', views.IgrejaDeleteView.as_view(), name='igreja-delete'),
    path('<str:pk>/', views.IgrejaDetailView.as_view(), name='igreja-detail'),
]
