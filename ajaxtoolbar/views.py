from django.shortcuts import render_to_response

def console(request):
    return render_to_response("ajaxtoolbar/console.html")
