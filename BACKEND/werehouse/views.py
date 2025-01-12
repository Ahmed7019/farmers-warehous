from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import warehouse
from .serializers import warehouseSerializer
from rest_framework.decorators import api_view

# Create your views here.
def clpass(request):
    return HttpResponse("<h1>hello</h1>")

class warehouse(viewsets.ModelViewSet):
    queryset = warehouse.objects.all()
    serializer_class = warehouseSerializer