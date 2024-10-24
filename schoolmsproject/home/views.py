from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'home/home.html')

def base(request):
    return render(request,'home/base.html')