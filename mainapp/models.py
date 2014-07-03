##models.py is used to store the database i.e. the tables and their attributes.

from paths import cpspath
from django import forms
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
import os
from uuid import uuid4



#Custom function to return the Post type object's date_time (used for sorting)
def get_dt(p):
    return p.date_time

        
class Experience(models.Model):
    myname = models.CharField(max_length=10,default=0)
    email_id=models.EmailField(max_length=30,default=0)
    rishi_name = models.CharField(max_length=50,default=0)
    ashram_name = models.CharField(max_length=300,default=0)
    about_rishi=models.CharField(max_length=5000,default=0)
    state=models.CharField(max_length=30,default=0)
    city=models.CharField(max_length=30,default=0)
    pincode=models.IntegerField(max_length=30,default=0)
    about_ashram = models.CharField(max_length=2000,default=0)
    image = models.CharField(max_length=300, default="http://www.decorview.com/sites/default/files/styles/products-image/public/default_user_image.jpg")
    status = models.IntegerField(default=0)
    
    
    def __unicode__(self):
        return self.myname
