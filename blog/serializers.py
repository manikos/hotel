from django.contrib.auth.models import User

from rest_framework import serializers

from .models import Post


# class UserListSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = User
#         fields = ('id', 'username', 'first_name', 'last_name', 'email', 'last_login')


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    first_name = serializers.CharField(required=False)
    last_name = serializers.CharField(required=False)
    last_login = serializers.DateTimeField(required=False)

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        # user.last_login =
        user.save()
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'first_name', 'last_name', 'email', 'last_login')


class PostSerializer(serializers.ModelSerializer):
    posts = serializers.PrimaryKeyRelatedField(many=True, queryset=Post.objects.all())

    class Meta:
        model = Post
        fields = ('id', 'title', 'slug', 'text', 'posts', 'created_at', 'updated_at')
