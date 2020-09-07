from django.views.generic import ListView, DetailView
from django.shortcuts import render
from .models import Post
from django.shortcuts import get_object_or_404


# Create your views here.

class PostsView(ListView):
  queryset = Post.objects.all().order_by('-created_date')
  template_name = 'index.jinja'


class PostDetail(DetailView):
  template_name = 'post.jinja'
  queryset = Post.objects.all()
  def get_object(self):
    self.object = get_object_or_404(
      Post, pk = self.kwargs.get('pk')
    )
    return self.object