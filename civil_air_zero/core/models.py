from django.db import models

class Message(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Footing_Isolated(models.Model):
    footing_name = models.TextField()
    footing_length = models.IntegerField()
    footing_breadth = models.IntegerField()
    input_depth1 = models.IntegerField()
    input_depth2 = models.IntegerField()
    input_hook = models.IntegerField()
    concrete_grade = models.TextField()
    rebar_grade = models.TextField()
    soling_type = models.TextField()
    pcc_grade = models.TextField()
    bar_x_dia = models.TextField()
    bar_y_dia = models.TextField()
    bar_x_spacing = models.IntegerField()
    bar_y_spacing = models.IntegerField()
    col_length = models.IntegerField()
    col_breadth = models.IntegerField()
