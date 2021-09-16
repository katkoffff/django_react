from rest_framework import serializers
from .models import Recipe, Categories

class CookbookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'title', 'inCategory', 'description', 'image')

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ('id', 'title', 'description', 'image')