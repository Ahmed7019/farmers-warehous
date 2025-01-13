# Generated by Django 5.1.4 on 2025-01-12 18:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('werehouse', '0003_warehouse_batch'),
    ]

    operations = [
        migrations.AlterField(
            model_name='warehouse',
            name='crop',
            field=models.CharField(choices=[('Wheat', 'Wheat')], default='Wheat', max_length=255),
        ),
        migrations.AlterField(
            model_name='warehouse',
            name='storage_condition',
            field=models.CharField(choices=[('climate', 'climate'), ('weather', 'weather')], default='climate', max_length=255),
        ),
        migrations.AlterField(
            model_name='warehouse',
            name='storage_location',
            field=models.CharField(choices=[('A1', 'A1'), ('B1', 'B1'), ('C1', 'C1')], default='A1', max_length=255),
        ),
    ]