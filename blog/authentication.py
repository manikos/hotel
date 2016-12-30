from django.contrib.auth.models import User
from django.http import Http404

from rest_framework_jwt.authentication import JSONWebTokenAuthentication


class SwaggerPassAuthentication(JSONWebTokenAuthentication):

    def authenticate(self, request):
        if '/api/docs/' in request.META.get('HTTP_REFERER'):
            username = request.parser_context.get('kwargs').get('username')
            if username is not None:
                try:
                    user = User.objects.get(username=username)
                except User.DoesNotExist:
                    raise Http404
                else:
                    return user, None
            user = User.objects.filter().first()
            return user, None

        return super(SwaggerPassAuthentication, self).authenticate(request)