from django.shortcuts import render, redirect
from .models import Message

# Create your views here.

def index(request):

    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        text = request.POST['text']

        new_msg= Message(user=name, email=email, text=text)
        new_msg.save()

        return redirect('/')


    return render(request, 'index.html')

