from django.urls import path
from .views import MessageList, MessageDetail, FootingAPI

urlpatterns = [
    path('api/messages/', MessageList.as_view()),
    path('api/messages/<int:pk>/', MessageDetail.as_view()),
     path('api/footing/', FootingAPI.as_view()),  # Add this line
]
