from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Message,Footing_Isolated
from .serializers import MessageSerializer, Footing_Isolated_Serializer
from django.http import Http404


class MessageList(APIView):
    """
    List all messages, or create a new message.
    """
    def get(self, request, format=None):
        messages = Message.objects.all()
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MessageDetail(APIView):
    """
    Retrieve, update or delete a message instance.
    """
    def get_object(self, pk):
        try:
            return Message.objects.get(pk=pk)
        except Message.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        message = self.get_object(pk)
        serializer = MessageSerializer(message)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        message = self.get_object(pk)
        serializer = MessageSerializer(message, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        message = self.get_object(pk)
        message.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

def calculate_volume(self, validated_data):
    length = validated_data.get('footing_length', 0)
    width = validated_data.get('footing_depth', 0)
    depth = validated_data.get('input_depth1', 0)
    
    # Calculate the volume
    volume = length * width * depth
    return volume



class FootingAPI(APIView):
    def post(self, request, format=None):
        serializer = Footing_Isolated_Serializer(data=request.data)
        if serializer.is_valid():
            volume = serializer.calculate_volume(serializer.validated_data)

            # Add the volume to the response data
            response_data = serializer.data
            response_data['volume'] = volume

            # serializer.save()  # Save the data to your model if you want
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request, format=None):
        footings = Footing_Isolated.objects.all()
        serializer = Footing_Isolated_Serializer(footings, many=True)
        return Response(serializer.data)