from django.db import models

# Create your models here.

class warehouse(models.Model):
    crop_type = {
        "Wheat": "Wheat",
        "Tomato": "Tomato",
    }  
    storage_c = {
        "climate" :"climate",
        "weather":"weather",
    }
    location = {
        "A1":"A1",
        "B1":"B1",
        "C1":"C1",
    }
    
    email = models.EmailField()  
    date = models.DateField(auto_now=False, auto_now_add=False)
    crop = models.CharField(choices=crop_type, max_length=255, default="Wheat")
    quantity = models.IntegerField(default=1)
    storage_condition = models.CharField(choices=storage_c,max_length=255, default="climate" )
    storage_location = models.CharField(choices=location,max_length=255, default="A1" )
    batch = models.TextField(max_length=255, null=True, blank=True, unique=True)

    def __str__(self):
        return self.email+"_"+self.crop