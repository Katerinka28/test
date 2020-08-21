from django.urls import path

from .views import PostsView, PostDetail


urlpatterns = [
  path('', PostsView.as_view(), name='post_list'),
  path('post/<int:pk>/', PostDetail.as_view(), name='post_detail')
]

