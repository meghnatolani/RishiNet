import math
from paths import cpspath
from facebook import GraphAPI
import json
from django.http import HttpResponse
from django.utils import timezone
from mainapp.models import *
from django.views.decorators.csrf import csrf_exempt
import datetime
from django.contrib.auth.models import User
from django.shortcuts import redirect, render
import uuid
import jinja2
import smtplib
from mainapp.checker import check
import thread
from django.http import *
from jinja2.ext import loopcontrols
import os
import urllib
import urllib2

def split_space(x):
    return x.strip().split()

jinja_environ = jinja2.Environment(loader=jinja2.FileSystemLoader([cpspath + '/proj/UI']), extensions=[loopcontrols])
jinja_environ.filters['split_space'] = split_space

website = "http://localhost:8000"


#Calls index page
def index(request):
    return HttpResponse(jinja_environ.get_template('index.html').render({"author":None}))

def share(request):
    return HttpResponse(jinja_environ.get_template('share.html').render({"author":None}))
  
def gallery1(request):
    return HttpResponse(jinja_environ.get_template('gallery1.html').render({"author":None}))
  
def gallery2(request):
    return HttpResponse(jinja_environ.get_template('gallery2.html').render({"author":None}))

def contact(request):
    return HttpResponse(jinja_environ.get_template('contact.html').render({"author":None}))
  
def gallery3(request):
    return HttpResponse(jinja_environ.get_template('gallery3.html').render({"author":None}))

def about(request):
    return HttpResponse(jinja_environ.get_template('about.html').render({"author":None}))
  
def contact(request):
    return HttpResponse(jinja_environ.get_template('contact.html').render({"author":None}))
@csrf_exempt
def share_do(request):
    global month
        
    entry = Experience(
		 myname=request.REQUEST['myname'],
                 email_id=request.REQUEST['email_id'],
                 rishi_name=request.REQUEST['rishi_name'], 
                 ashram_name=request.REQUEST['ashram_name'],
                 state=request.REQUEST['state'],
                 city=request.REQUEST['city'],
                 pincode=request.REQUEST['pincode'],
                 about_ashram=request.REQUEST['about_ashram'],
                 about_rishi=request.REQUEST['about_rishi'],
                 status=0,
                 )
    entry.save()
    return HttpResponse(jinja_environ.get_template('notice.html').render({
                                                                          "text":'<p>Shared successfully. </p>Admin will view the post and may or may not accept it.',
                                                                          "link": '/index/'}))

def test(request):
    y = Experience.objects.filter(email_id='mmeme')
    return HttpResponse(jinja_environ.get_template('test.html').render({"y": y}))
  
  
def gallery01(request):
    x=Experience.objects.all().extra(order_by = ['ashram_name'])
    return HttpResponse(jinja_environ.get_template('gallery01.html').render({'x': x}))
