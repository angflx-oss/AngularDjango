# Generated by Django 4.0 on 2022-01-13 06:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ServicioSocialApp', '0016_asesor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='asesor',
            name='apellido2',
            field=models.CharField(max_length=250, null=True),
        ),
    ]
