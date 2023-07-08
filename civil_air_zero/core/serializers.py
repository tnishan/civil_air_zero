from rest_framework import serializers
from .models import Message,Footing_Isolated
import math

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'content', 'created_at', 'updated_at']

class Footing_Isolated_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Footing_Isolated
        fields = ['footing_name','footing_length', 'footing_breadth', 'input_depth1', 'input_depth2', 
                  'concrete_grade', 'rebar_grade', 'soling_type', 'pcc_grade','bar_x_dia', 'bar_y_dia',
                  'bar_x_spacing', 'bar_y_spacing', 'col_length','col_breadth','input_hook']

    def calculate_volume(self, validated_data):
        length = validated_data.get('footing_length')
        width = validated_data.get('footing_breadth')
        depth = validated_data.get('input_depth1')
        soling_type = validated_data.get('soling_type')
        pcc_grade = validated_data.get('pcc_grade')

        # Calculate the volume
        volume = length * width * depth/1000000000
        return { 'concrete volume': volume,
                 'Soling Type': soling_type,
                 'PCC Grade': pcc_grade
                }
    

    def calculate_bar_props(self, validated_data):
        length = validated_data.get('footing_length')
        breadth = validated_data.get('footing_breadth')
        bar_x_dia = int(validated_data.get('bar_x_dia'))
        bar_y_dia = int(validated_data.get('bar_y_dia'))
        bar_x_spacing = int(validated_data.get('bar_x_spacing'))
        bar_y_spacing =int( validated_data.get('bar_y_spacing'))
        input_hook = int(validated_data.get('input_hook'))

        # Calculations for x direction
        v1_x = input_hook
        h1_x = length-100
        v2_x  = input_hook
        no_bars_x = math.ceil((breadth - 100) / bar_y_spacing)
        bar_length_x = (input_hook + length + input_hook - 50 * 2) / 1000
        bar_unit_wt_x = round(bar_y_dia * bar_y_dia / 162, 2)
        total_length_x = round(bar_length_x * no_bars_x,2)
        total_wt_x = round(total_length_x * bar_unit_wt_x,2)

        # Calculations for y direction
        v1_y = input_hook
        h1_y = breadth-100
        v2_y  = input_hook     
        no_bars_y = math.ceil((length - 100) / bar_x_spacing)
        bar_length_y = (input_hook + breadth + input_hook - 50 * 2) / 1000
        bar_unit_wt_y = round(bar_x_dia * bar_x_dia / 162, 2)
        total_length_y = round(bar_length_y * no_bars_y,2)
        total_wt_y = round(total_length_y * bar_unit_wt_y,2)

        return {
            'x_direction': {
                'v1':v1_x, 'v2':v2_x, 'h1':h1_x,'bar_dia':bar_x_dia,
                'bar_length': bar_length_x,
                'no_bars': no_bars_x,
                'bar_unit_wt': bar_unit_wt_x,
                'total_length': total_length_x,
                'total_wt': total_wt_x
            },
            'y_direction': {
                'v1': v1_y, 'v2': v2_y, 'h1': h1_y,'bar_dia':bar_y_dia,
                'bar_length': bar_length_y,
                'no_bars': no_bars_y,
                'bar_unit_wt': bar_unit_wt_y,
                'total_length': total_length_y,
                'total_wt': total_wt_y
            }
        }



