from django.conf.urls import patterns, url

urlpatterns = patterns('',
	url(r'^/console', 'ajaxtoolbar.views.console')
)

