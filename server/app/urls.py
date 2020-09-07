from django.conf import settings
from django.conf.urls import url, include
from django.urls import path
from django.contrib import admin
from django.contrib.staticfiles.urls import static
from django.conf.urls.i18n import i18n_patterns

urlpatterns = [
    url(r'^admin/', admin.site.urls),
]

if 'rosetta' in settings.INSTALLED_APPS:
    urlpatterns += [url(r'^rosetta/', include('rosetta.urls'))]

if settings.DEBUG:
    urlpatterns += [url(r'^', include('markup.urls'))]
    urlpatterns += (
        static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) +
        static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    )

    if 'debug_toolbar' in settings.INSTALLED_APPS:
        import debug_toolbar
        urlpatterns += [
            url(r'^__debug__/', include(debug_toolbar.urls)),
        ]
urlpatterns += i18n_patterns(
    path('vuejs-translate/', include('vuejs_translate.urls')),
    path('blog/', include('apps.blog.urls')),
    prefix_default_language=False
)