from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField()
    text = models.TextField()
    author = models.ForeignKey(User, models.CASCADE, related_name='posts')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def get_absolute_url(self):
        return self.slug

    def get_title(self):
        return self.title

    def get_slug(self):
        return self.slug

    def get_text(self):
        return self.text
