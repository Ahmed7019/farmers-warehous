from rest_framework import serializers
from .models import warehouse

class warehouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = warehouse
        fields = ['email' ,'date', 'crop', 'quantity', 'storage_condition', 'storage_location', 'batch']

    def create(self, validated_data):
        crop = validated_data.get('crop')
        condition = validated_data.get('storage_condition')
        batch = crop[:2] + condition[:2]
        validated_data['batch'] = batch
        warehouse_instanse = warehouse.objects.create(**validated_data)
        return warehouse_instanse