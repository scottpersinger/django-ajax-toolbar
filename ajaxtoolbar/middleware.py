import call_trace
from lib import call_trace
import zlib, base64
import urllib
import simplejson

class AjaxToolbarInjector:
    def process_view(self, request, view_func, view_args, view_kwargs):
        if 'HTTP_X_DJANGO_LOG' in request.META:
            call_trace.enable()
        return None

    def process_response(self, request, response):
        if 'HTTP_X_DJANGO_LOG' in request.META:
            trace = call_trace.call_stack()
            #print "\n".join(trace)
            call_trace.disable()
            response['X-Django-Log'] = base64.b64encode(zlib.compress(urllib.quote(simplejson.dumps(trace)),9))
        return response        