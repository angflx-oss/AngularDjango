# Generated by Django 4.0 on 2022-01-12 06:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ServicioSocialApp', '0009_dependencia'),
    ]

    operations = [
        migrations.CreateModel(
            name='Departamento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('departamento', models.CharField(max_length=250)),
                ('unidadreceptora', models.CharField(max_length=250)),
            ],
        ),
    ]
