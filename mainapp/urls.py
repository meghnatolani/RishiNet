from django.conf.urls import patterns, url
#from django.conf.urls.defaults import handler404, handler500

from mainapp import views, errors
from django.http import *

urlpatterns = patterns('',
    #Actions
    url(r'^$', views.index, name='index'),
    url(r'^share_do/', views.share_do, name='share_do'),
    
    #Pages
      url(r'^gallery1/', views.gallery1, name='gallery1'),
      url(r'^gallery01/', views.gallery01, name='gallery01'),
      url(r'^gallery2/', views.gallery2, name='gallery2'),
      url(r'^about/', views.about, name='about'),
      url(r'^gallery3/', views.gallery3, name='gallery3'),
      url(r'^index/', views.index, name = 'index'),
      url(r'^share/', views.share, name = 'share'),
      url(r'^contact/', views.contact, name='contact'),
      url(r'^test/', views.test, name='test'),
      
      
   
 	
    #temp for check
    #url(r'^tempage/', views.tempage, name='tempage'),    
)
