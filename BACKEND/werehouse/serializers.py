from rest_framework import serializers
from .models import warehouse

class warehouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = warehouse
        fields = '__all__'