from django.contrib.auth.models import User

from rest_framework import serializers

from .models import Post


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        user.save()
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email')


class PostSerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(many=True, queryset=Post.objects.all())

    class Meta:
        model = Post
        fields = ('id', 'title', 'slug', 'text', 'posts', 'created_at', 'updated_at')
