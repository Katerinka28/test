"""
Django settings for test project.

Generated by 'django-admin startproject' using Django.
"""

import jinja2
from pathlib import Path

from django_jinja.builtins import DEFAULT_EXTENSIONS
import environ


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = Path(__file__)
BASE_ROOT = BASE_DIR.parent.parent


env = environ.Env(DEBUG=(bool, False),)


env_file = str(BASE_ROOT.parent / '.env')
env.read_env(env_file)
# ROSETTA
ROSETTA_SHOW_AT_ADMIN_PANEL = True
ROSETTA_MESSAGES_PER_PAGE = 10
ROSETTA_REQUIRES_AUTH = True
ROSETTA_LOGIN_URL = '/'


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.10/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env('DJANGO_SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env('DJANGO_DEBUG')

ALLOWED_HOSTS: list = []


# Application definition

PROJECT_APPS = [
    'apps.blog',
    'markup',

]

INSTALLED_APPS = PROJECT_APPS + [
    'rosetta',

    'django_jinja',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    'vuejs_translate',

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware'
]

ROOT_URLCONF = 'app.urls'

TEMPLATES = [
    {
        'BACKEND': 'django_jinja.backend.Jinja2',
        'NAME': 'jinja2',
        'APP_DIRS': True,
        'DIRS': [],
        'OPTIONS': {
            'environment': 'shared.env.jinja2.environment',
            'match_extension': '.jinja',
            'newstyle_gettext': True,
            'auto_reload': True,
            'undefined': jinja2.Undefined,
            'debug': True,

            'filters': {},

            'globals': {},

            'context_processors': [
                'django.contrib.auth.context_processors.auth',
                'django.template.context_processors.debug',
                'django.template.context_processors.i18n',
                'django.template.context_processors.media',
                'django.template.context_processors.static',
                'django.template.context_processors.tz',
                'django.contrib.messages.context_processors.messages',
            ],

            'extensions': DEFAULT_EXTENSIONS,

            "bytecode_cache": {
                "name": "default",
                "backend": "django_jinja.cache.BytecodeCache",
                "enabled": True,
            },
        },
    },
    {
        'DIRS': [],
        'APP_DIRS': True,
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.media',
                'django.template.context_processors.static',
                'django.template.context_processors.debug',
                'django.template.context_processors.i18n',
                'django.template.context_processors.request',
                'django.contrib.messages.context_processors.messages',
                'django.contrib.auth.context_processors.auth',
            ],
        },
    },
]

WSGI_APPLICATION = 'app.wsgi.application'

LOCALE_PATHS = (
    BASE_ROOT / 'locale',
)

# Database

DATABASES = {
    # Raises ImproperlyConfigured exception if DATABASE_URL not in os.environ
    'default': env.db('DJANGO_DB_URL')
}
DATABASES['default']['CONN_MAX_AGE'] = env.int('CONN_MAX_AGE', default=0)

# Password validation

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization

LANGUAGE_CODE = 'ru'
LANGUAGES = (
    ('ru', 'Russian'),
)

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.10/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = BASE_ROOT / 'static'
MEDIA_URL = '/uploads/'
MEDIA_ROOT = BASE_ROOT / 'uploads'

LOCALE_PATHS = (
    BASE_ROOT / 'locale',
)

SITE_ID = 1

CACHES = {
    'default': env.cache_url('DJANGO_CACHE_URL', 'dummycache://127.0.0.1')
}

EMAIL_CONFIG = env.email_url('DJANGO_EMAIL_URL', 'consolemail://127.0.0.1')
vars().update(EMAIL_CONFIG)


CELERY_BROKER_URL = env.str('CELERY_BROKER_URL')

# If you are using HTTPS enable this

# SESSION_COOKIE_SECURE = True
# CSRF_COOKIE_SECURE = True
# SECURE_PROXY_SSL_HEADER = ('HTTP_X_SCHEME', 'https')
