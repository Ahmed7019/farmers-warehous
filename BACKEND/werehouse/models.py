from django.db import models

# Create your models here.

class warehouse(models.Model):
    crop_type = {
        "WH": "Wheat",
        "TO": "Tomato",
    }  
    storage_c = {
        "C" :"climate",
        "W":"weather",
    }
    location = {
        "A1":"A1",
        "B1":"B1",
        "C1":"C1",
    }
    
    email = models.EmailField()  
    date = models.DateField(auto_now=False, auto_now_add=False)
    crop = models.CharField(choices=crop_type, max_length=255)
    quantity = models.IntegerField()
    storage_condition = models.CharField(choices=storage_c,max_length=2 )
    storage_location = models.CharField(choices=location,max_length=2 )