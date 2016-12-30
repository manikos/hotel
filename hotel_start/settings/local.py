from .base import *


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']

CORS_ORIGIN_ALLOW_ALL = True


LOGIN_URL = 'rest_framework:login'
LOGOUT_URL = 'rest_framework:logout'
# SWAGGER_SETTINGS = {
#     'SECURITY_DEFINITIONS': {
#         'api_key': {
#             'type': 'apiKey',
#             'name': 'JWT',
#             'in': 'header'
#         }
#     }
# }