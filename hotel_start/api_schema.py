import coreapi

my_schema = coreapi.Document(
    title='Hotel API',
    url='https://testhotel.herokuapp.com/docs/',
    content={
        ##########################
        #          USER          #
        ##########################
        'user_get': coreapi.Link(
            url='/api/user/',
            action='get',
            description='Show all users',
        ),
        'user_post': coreapi.Link(
            url='/api/user/',
            action='post',
            description='Create a new user',
            fields=[
                coreapi.Field(
                    name='username',
                    required=True,
                    location='form',
                    type='string',
                    description='User\'s username'
                ),
                coreapi.Field(
                    name='password',
                    required=True,
                    location='form',
                    type='string',
                    description='User\'s password'
                ),
                coreapi.Field(
                    name='email',
                    required=False,
                    location='form',
                    type='string',
                    description='User\'s email'
                ),
                coreapi.Field(
                    name='First name',
                    required=False,
                    location='form',
                    type='string',
                    description='User\'s first name'
                ),
                coreapi.Field(
                    name='Last name',
                    required=False,
                    location='form',
                    type='string',
                    description='User\'s last name'
                ),
            ]
        ),
        'user_details_get': coreapi.Link(
            url='/api/user/{username}/',
            action='get',
            description='Show user details (via username)',
            fields=[
                coreapi.Field(
                    name='username',
                    required=True,
                    location='path',
                    type='string',
                    description='The username of the user'
                ),
            ],
        ),
        'user_details_put': coreapi.Link(
            url='/api/user/{username}/',
            action='put',
            description='Edit user (via username)',
            fields=[
                coreapi.Field(
                    name='username',
                    required=False,
                    location='form',
                    type='string',
                    description='User\'s username'
                ),
                coreapi.Field(
                    name='password',
                    required=False,
                    location='form',
                    type='string',
                    description='User\'s password'
                ),
                coreapi.Field(
                    name='email',
                    required=False,
                    location='form',
                    type='string',
                    description='User\'s email'
                ),
                coreapi.Field(
                    name='First name',
                    required=False,
                    location='form',
                    type='string',
                    description='User\'s first name'
                ),
                coreapi.Field(
                    name='Last name',
                    required=False,
                    location='form',
                    type='string',
                    description='User\'s last name'
                ),
            ],
        ),
        'user_details_delete': coreapi.Link(
            url='/api/user/{username}/',
            action='delete',
            description='Delete user (via username)',
            fields=[
                coreapi.Field(
                    name='username',
                    required=True,
                    location='path',
                    type='string',
                    description='The username of the user'
                ),
            ],
        ),
    }
)