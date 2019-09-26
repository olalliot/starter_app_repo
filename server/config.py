"""
Server development configuration.
"""

import os

# Root of this application, useful if it doesn't occupy an entire domain
APPLICATION_ROOT = '/'

# Secret key for encrypting cookies
SECRET_KEY = b'\xd3\x9bg\xb8\xb9\x84?4\x82y>!5\xa4Q\xfe\x9fLI\xf9\xd9&\xe6\xb4'  # noqa: E501  pylint: disable=line-too-long
SESSION_COOKIE_NAME = 'login'


# Database file is var/server.sqlite3
DATABASE_FILENAME = os.path.join(
    os.path.dirname(os.path.dirname(os.path.realpath(__file__))),
    'var', 'backend.sqlite3'
)
