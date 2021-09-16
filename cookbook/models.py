from django.db import models

class Categories(models.Model):

    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(max_length=255, upload_to='category', null=True, blank=True, default='')

    def __str__(self):
        return f'{self.title}'

class Recipe(models.Model):

    title = models.CharField(max_length=100)
    inCategory = models.ForeignKey(Categories, on_delete=models.CASCADE)
    description = models.TextField()
    image = models.ImageField(max_length=255, upload_to='recipe', null=True, blank=True, default='')

    #def get_absolute_url(self):
    #    return f'/recipe/{self.id}'

