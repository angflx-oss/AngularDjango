# Generated by Django 4.0 on 2022-01-13 00:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ServicioSocialApp', '0013_nivel_statusbrigadista'),
    ]

    operations = [
        migrations.CreateModel(
            name='Etiqueta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
            ],
        ),
    ]