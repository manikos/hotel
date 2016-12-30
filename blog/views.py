from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import generics, mixins, permissions, authentication
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework_jwt.utils import jwt_decode_handler

from .serializers import PostSerializer, UserSerializer
from hotel_start.settings import JWT_AUTH


def homepage(request):
    return render(request, 'base/base.html')


class UserCreate(mixins.CreateModelMixin, mixins.ListModelMixin, generics.GenericAPIView):
    authentication_classes = (JSONWebTokenAuthentication, )
    permission_classes = (permissions.IsAuthenticated, )
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class UserDetail(mixins.RetrieveModelMixin, mixins.UpdateModelMixin,
                 mixins.DestroyModelMixin, generics.GenericAPIView):
    authentication_classes = (JSONWebTokenAuthentication, )
    permission_classes = (permissions.IsAuthenticated, )
    lookup_field = 'username'
    serializer_class = UserSerializer

    def get_queryset(self):
        if self.kwargs.get(self.lookup_field) == 'me':
            token = self.request.META.get('HTTP_AUTHORIZATION')
            if token and JWT_AUTH.get('JWT_AUTH_HEADER_PREFIX') in token:
                token = token.strip(JWT_AUTH.get('JWT_AUTH_HEADER_PREFIX') + ' ')
                self.kwargs[self.lookup_field] = jwt_decode_handler(token).get(self.lookup_field)
        return User.objects.all()

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.put(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)