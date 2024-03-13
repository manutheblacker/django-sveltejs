from django.urls import path, re_path

from home.views import home

urlpatterns = [
    re_path(r'^(.*)/$', home ),
    path('', home ),
]
