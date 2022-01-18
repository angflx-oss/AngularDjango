from django.db.models import fields
from rest_framework import serializers
from .models import Asesor, Brigadista, Ciclo, Departamento, Dependencia, Documento, Etiqueta, Modalidad, Nivel, Proyecto, Status, StatusBrigadista, UnidadAcademica, UnidadReceptora, UnidadRegional, Carrera

class UnidadRegionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnidadRegional
        fields = '__all__'

class UnidadAcademicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnidadAcademica
        fields = '__all__'

class ModalidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Modalidad
        fields = '__all__'

class CarreraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrera
        fields = '__all__'

class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = '__all__'        

class CicloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciclo
        fields = '__all__'        

class UnidadReceptoraSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnidadReceptora
        fields = '__all__'        

class DependenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dependencia
        fields = '__all__'   

class DepartamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departamento
        fields = '__all__'       

class ProyectoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proyecto
        fields = '__all__'       

class NivelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nivel
        fields = '__all__'   

class StatusBrigadistaSerializer(serializers.ModelSerializer):
    class Meta:
        model = StatusBrigadista
        fields = '__all__'   

class EtiquetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Etiqueta
        fields = '__all__'   

class DocumentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Documento
        fields = '__all__'   

class AsesorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asesor
        fields = '__all__'   

class BrigadistaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brigadista
        fields = '__all__'   