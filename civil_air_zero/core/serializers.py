from rest_framework import serializers
from .models import Message,Footing_Isolated

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'content', 'created_at', 'updated_at']

class Footing_Isolated_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Footing_Isolated
        fields = ['footing_length', 'footing_breadth', 'input_depth1', 'input_depth2', 
                  'concrete_grade', 'rebar_grade', 'soling_type', 'pcc_grade']

    def calculate_volume(self, validated_data):
        length = validated_data.get('footing_length')
        width = validated_data.get('footing_breadth')
        depth = validated_data.get('input_depth1')
        
        # Calculate the volume
        volume = length * width * depth
        return volume/10**9
