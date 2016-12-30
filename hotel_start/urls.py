"""hotel_start URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include

from rest_framework import renderers
from rest_framework.schemas import get_schema_view
from rest_framework_swagger import renderers as swagger_renderers
from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token, refresh_jwt_token

from my_auth import views as my_auth_views
from blog import views as blog_views

# schema_view = get_schema_view(title='Hotel API',
#                               renderer_classes=[
#                                   renderers.CoreJSONRenderer,
#                                   swagger_renderers.OpenAPIRenderer,
#                                   swagger_renderers.SwaggerUIRenderer]
#                               )

urlpatterns = [
    url(r'^$', blog_views.homepage, name='homepage'),

    url(r'^auth/$', obtain_jwt_token),
    url(r'^verify-jwt/$', verify_jwt_token),
    url(r'^refresh-jwt/$', refresh_jwt_token),

    # API
    url(r'^api/docs/', blog_views.MySchema.as_view()),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    url(r'^api/user/$', blog_views.UserView.as_view()),
    url(r'^api/user/(?P<username>\w+)/$', blog_views.UserDetail.as_view()),
]
