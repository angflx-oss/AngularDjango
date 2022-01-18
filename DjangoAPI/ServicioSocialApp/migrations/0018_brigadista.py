# Generated by Django 4.0 on 2022-01-13 07:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ServicioSocialApp', '0017_alter_asesor_apellido2'),
    ]

    operations = [
        migrations.CreateModel(
            name='Brigadista',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numerodecuenta', models.CharField(max_length=250)),
                ('name', models.CharField(max_length=250)),
                ('apellido1', models.CharField(max_length=250)),
                ('apellido2', models.CharField(max_length=250, null=True)),
                ('ciclo', models.CharField(max_length=250)),
                ('status', models.CharField(max_length=250)),
                ('correo', models.EmailField(max_length=250)),
                ('telefono', models.CharField(max_length=250)),
                ('carrera', models.CharField(max_length=250)),
                ('unidadacademica', models.CharField(max_length=250)),
                ('proyecto', models.CharField(max_length=250, null=True)),
                ('departamento', models.CharField(max_length=250, null=True)),
                ('dependencia', models.CharField(max_length=250, null=True)),
                ('unidadreceptora', models.CharField(max_length=250, null=True)),
                ('inicio', models.DateField()),
                ('fin', models.DateField()),
                ('documento', models.CharField(max_length=250, null=True)),
            ],
        ),
    ]
