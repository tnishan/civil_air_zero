from django.db import models

class Message(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Footing_Isolated(models.Model):
    footing_length = models.IntegerField()
    footing_breadth = models.IntegerField()
    input_depth1 = models.IntegerField()
    input_depth2 = models.IntegerField()
    # input_hook = models.IntegerField()
    concrete_grade = models.TextField()
    rebar_grade = models.TextField()
    soling_type = models.TextField()
    pcc_grade = models.TextField()


