def jwt_response_payload_handler(token, user=None, request=None):
    """
    Overrides rest_framework_jwt.utils.jwt_response_payload_handler

    Returns the response data for both the login and refresh views.
    Override to return a custom response such as including the
    serialized representation of the User.

    Example:

    def jwt_response_payload_handler(token, user=None, request=None):
        return {
            'token': token,
            'user': UserSerializer(user, context={'request': request}).data
        }

    """
    return {
        'token': token,
        'user': user.get_username(),
        'groups': user.groups.all(),
    }