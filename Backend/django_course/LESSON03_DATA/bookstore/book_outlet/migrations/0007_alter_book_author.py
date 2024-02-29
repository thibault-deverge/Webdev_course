# Generated by Django 5.0.2 on 2024-02-20 11:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book_outlet', '0006_author_remove_book_is_bestselling_alter_book_slug_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='author',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='books', to='book_outlet.author'),
        ),
    ]