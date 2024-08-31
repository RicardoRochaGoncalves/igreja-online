from django.urls import path
from api.views.user import user_views as views

urlpatterns = [
    path("", views.UserList.as_view(), name="users"),
    path("login/", views.MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("profile/", views.UserProfileView.as_view(), name="users-profile"),
    path("register/", views.RegisterUserView.as_view(), name="register"),
]
