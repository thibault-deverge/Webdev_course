from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.urls import reverse
from django.utils.text import slugify

# Create your models here.
class Country(models.Model):
    name = models.CharField(max_length=90)
    code = models.CharField(max_length=2)

    class Meta:
        verbose_name_plural = "Countries"

    def __str__(self):
        return f"{self.name} ({self.code})"

class Address(models.Model):
    street = models.CharField(max_length=80)
    postal_code = models.CharField(max_length=5)
    city = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.street}, {self.postal_code}, {self.city}"
    
    class Meta:
        verbose_name_plural = "Address Entries"

class Author(models.Model):
    first_name = models.CharField(max_length = 100)
    last_name = models.CharField(max_length = 100)
    address = models.OneToOneField(Address, on_delete=models.CASCADE, null=True)

    def full_name(self):
        return f"{self.first_name} ({self.last_name})"

    def __str__(self):
        return self.full_name()

class Book(models.Model):
    title = models.CharField(blank=True, max_length=50)
    rating = models.IntegerField(default=3, validators=[
        MinValueValidator(0),
        MaxValueValidator(5),
    ])
    author = models.ForeignKey(Author, on_delete=models.CASCADE, null=True, related_name="books") 
    published_country = models.ManyToManyField(Country)
    slug = models.SlugField(default="", null=False, blank=True, db_index=True)

    def get_absolute_url(self):
        return reverse("book-detail", args=[self.slug])
    
    def __str__(self):
        return f"{self.title} ({self.rating})"