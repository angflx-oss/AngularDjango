from django.db import models

class UnidadRegional(models.Model):
    name = models.CharField(max_length=250, null=False)

    def __str__(self):
        return self.name

class UnidadAcademica(models.Model):
    name = models.CharField(max_length=250, null=False)
    unidadregional = models.CharField(max_length=250, null=False)

    def __str__(self):
        return self.name

class Carrera(models.Model):
    name = models.CharField(max_length=250, null=False)
    unidadacademica = models.CharField(max_length=250, null=False)
    unidadregional = models.CharField(max_length=250, null=False)
    modalidad = models.CharField(max_length=250, null=False, default="Escolarizada")

    def __str__(self):
        return self.name

class Modalidad(models.Model):
    name = models.CharField(max_length=250, null=False)

    def __str__(self):
        return self.name

class Status(models.Model):
    name = models.CharField(max_length=250, null=False)

    def __str__(self):
        return self.name

class Ciclo(models.Model):
    name = models.CharField(max_length=250, null=False)
    status = models.CharField(max_length=250, null=False)
    inicio = models.DateField()
    fin = models.DateField()
    numdeinformes = models.CharField(max_length=50, null=False)
    fase = models.CharField(max_length=50, null=False)
    

    def __str__(self):
        return self.name

class UnidadReceptora(models.Model):
    name = models.CharField(max_length=250, null=False)
    status = models.CharField(max_length=250, null=False)
    
    def __str__(self):
        return self.name

class Dependencia(models.Model):
    name = models.CharField(max_length=250, null=False)
    unidadreceptora = models.CharField(max_length=250, null=False)
    
    def __str__(self):
        return self.name

class Departamento(models.Model):
    name = models.CharField(max_length=250, null=False)
    dependencia = models.CharField(max_length=250, null=False)
    unidadreceptora = models.CharField(max_length=250, null=False)
    
    def __str__(self):
        return self.name

class Proyecto(models.Model):
    name = models.CharField(max_length=250, null=False)
    numerodeproyecto = models.CharField(max_length=250, null=False)
    ciclo = models.CharField(max_length=250, null=False)
    departamento = models.CharField(max_length=250, null=False)
    dependencia = models.CharField(max_length=250, null=False)
    unidadreceptora = models.CharField(max_length=250, null=False)
    status = models.CharField(max_length=250, null=False)
    
    def __str__(self):
        return self.name

class Nivel(models.Model):
    name = models.CharField(max_length=250, null=False)

    def __str__(self):
        return self.name

class StatusBrigadista(models.Model):
    name = models.CharField(max_length=250, null=False)

    def __str__(self):
        return self.name

class Etiqueta(models.Model):
    name = models.CharField(max_length=250, null=False)

    def __str__(self):
        return self.name

class Documento(models.Model):
    name = models.CharField(max_length=250, null=False)

    def __str__(self):
        return self.name

class Asesor(models.Model):
    name = models.CharField(max_length=250, null=False)
    apellido1 = models.CharField(max_length=250, null=False)
    apellido2 = models.CharField(max_length=250, null=True)
    status = models.CharField(max_length=250, null=False)
    telefono = models.CharField(max_length=250, null=False)
    correo = models.CharField(max_length=250, null=False)
    unidadacademica = models.CharField(max_length=250, null=False)


    def __str__(self):
        return self.name

class Brigadista(models.Model):
    numerodecuenta = models.CharField(max_length=250, null=False)
    name = models.CharField(max_length=250, null=False)
    apellido1 = models.CharField(max_length=250, null=False)
    apellido2 = models.CharField(max_length=250, null=True)
    ciclo = models.CharField(max_length=250, null=False)
    status = models.CharField(max_length=250, null=False)
    correo = models.EmailField(max_length=250, null=False)
    telefono = models.CharField(max_length=250, null=False)
    carrera = models.CharField(max_length=250, null=False)
    unidadacademica = models.CharField(max_length=250, null=False)
    proyecto = models.CharField(max_length=250, null=True)
    departamento = models.CharField(max_length=250, null=True)
    dependencia = models.CharField(max_length=250, null=True)
    unidadreceptora = models.CharField(max_length=250, null=True)
    inicio = models.DateField()
    fin = models.DateField()
    documento = models.CharField(max_length=250, null=True)
    numerodeinforme = models.CharField(max_length=250, null=True)

    def __str__(self):
        return self.name