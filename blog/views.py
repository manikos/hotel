from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import generics, mixins, permissions, authentication
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework_jwt.utils import jwt_decode_handler

from .serializers import PostSerializer, UserSerializer


def homepage(request):
    return render(request, 'base/base.html')


class UserCreate(mixins.CreateModelMixin, generics.GenericAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class UserDetail(mixins.RetrieveModelMixin, generics.GenericAPIView):
    authentication_classes = (JSONWebTokenAuthentication, )
    permission_classes = (permissions.IsAuthenticated, )
    lookup_field = 'username'
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        # if 'me' in kwargs:
        #     token = request.META.get('HTTP_AUTHORIZATION')
        #     if token and 'JWT' in token:
        #         token = token.strip('JWT ')
        #         kwargs['username'] = jwt_decode_handler(token).get('username')
        return self.retrieve(request, *args, **kwargs)
