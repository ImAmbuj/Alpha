from django.db import models

# Create your models here.

class Message(models.Model):
    
    user = models.TextField(blank=False, max_length=50)
    email = models.EmailField(blank=False, null=False)
    text = models.TextField(max_length=500)

    def __str__(self):
        return str(self.user)