from django.shortcuts import render
from .models import Recipe, Categories
from .serializers import CookbookSerializer, CategoriesSerializer
from rest_framework import generics

class CookbookListCreate(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = CookbookSerializer

class CategoriesListCreate(generics.ListCreateAPIView):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer