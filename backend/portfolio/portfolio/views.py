# portfolio/portfolio/views.py
from django.shortcuts import render

def homepage_view(request):
    return render(request, 'index.html') # Renders templates/index.html