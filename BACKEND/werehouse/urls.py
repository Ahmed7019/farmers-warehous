from django.urls import path
from . import views


urlpatterns = [
    path('', views.clpass),
    path('warehouse', views.warehouse.as_view(
        {'get':'list',
        'post': 'create'})
        ),
    path('warehouse/<int:pk>', views.warehouse.as_view(
        {
            'get':'retrive',
            'put':'update',
            'patch':'partial_update',
            'delete':'destroy',
        }
    ))
    
]
