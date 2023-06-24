from django.urls import path
from . import views
from .views import MessageList, MessageDetail

urlpatterns = [
    path('api/messages/', MessageList.as_view()),
    path('api/messages/<int:pk>/', MessageDetail.as_view()),
]
