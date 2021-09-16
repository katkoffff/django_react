from django.urls import path
from . import views

urlpatterns = [
    path('api/cookbook/', views.CookbookListCreate.as_view()),
    path('api/category/', views.CategoriesListCreate.as_view()),
]