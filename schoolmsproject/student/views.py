from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def getStudentName(request):
    return render(request,'student/studentinfo.html')
    #return HttpResponse('Hello')


def getStudentParent(request):
    return HttpResponse('Parent')