from django.core.mail.message import BadHeaderError
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import serializers
from django.core.mail import EmailMessage, send_mail
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Asesor, Brigadista, Carrera, Ciclo, Departamento, Dependencia, Documento, Etiqueta, Modalidad, Nivel, Proyecto, Status, StatusBrigadista, UnidadAcademica, UnidadReceptora, UnidadRegional
from .serializers import AsesorSerializer, BrigadistaSerializer, CicloSerializer, DepartamentoSerializer, DependenciaSerializer, DocumentoSerializer, EtiquetaSerializer, ModalidadSerializer, NivelSerializer, ProyectoSerializer, StatusBrigadistaSerializer, StatusSerializer, UnidadAcademicaSerializer, UnidadReceptoraSerializer, UnidadRegionalSerializer, CarreraSerializer
from .email import send_email


@api_view(['GET'])
def urList(request):
    ur = UnidadRegional.objects.all()
    serializer = UnidadRegionalSerializer(ur, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def urDetail(request, pk):
    ur = UnidadRegional.objects.get(id=pk)
    serializer = UnidadRegionalSerializer(ur, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def urCreate(request):    
    serializer = UnidadRegionalSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def urUpdate(request, pk):    
    ur = UnidadRegional.objects.get(id=pk)
    serializer = UnidadRegionalSerializer(instance=ur, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def urDelete(request, pk):    
    ur = UnidadRegional.objects.get(id=pk)
    ur.delete()

    return Response("Item successfully deleted")

@api_view(['GET'])
def uaList(request):
    ua = UnidadAcademica.objects.all()
    serializer = UnidadAcademicaSerializer(ua, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def uaDetail(request, pk):
    ua = UnidadAcademica.objects.get(id=pk)
    serializer = UnidadAcademicaSerializer(ua, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def uaCreate(request):    
    serializer = UnidadAcademicaSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def uaUpdate(request, pk):    
    ua = UnidadAcademica.objects.get(id=pk)
    serializer = UnidadAcademicaSerializer(instance=ua, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def uaDelete(request, pk):    
    ua = UnidadAcademica.objects.get(id=pk)
    ua.delete()

    return Response("Item successfully deleted")

@api_view(['GET'])
def carreraList(request):
    carrera = Carrera.objects.all()
    serializer = CarreraSerializer(carrera, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def carreraDetail(request, pk):
    carrera = Carrera.objects.get(id=pk)
    serializer = CarreraSerializer(carrera, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def carreraCreate(request):    
    serializer = CarreraSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def carreraUpdate(request, pk):    
    carrera = Carrera.objects.get(id=pk)
    serializer = CarreraSerializer(instance=carrera, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def carreraDelete(request, pk):    
    carrera = Carrera.objects.get(id=pk)
    carrera.delete()

    return Response("Item successfully deleted")


@api_view(['GET'])
def modalidadList(request):
    modalidad = Modalidad.objects.all()
    serializer = ModalidadSerializer(modalidad, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def modalidadDetail(request, pk):
    modalidad = Modalidad.objects.get(id=pk)
    serializer = ModalidadSerializer(modalidad, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def modalidadCreate(request):    
    serializer = ModalidadSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def modalidadUpdate(request, pk):    
    modalidad = Modalidad.objects.get(id=pk)
    serializer = ModalidadSerializer(instance=modalidad, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def modalidadDelete(request, pk):    
    modalidad = Modalidad.objects.get(id=pk)
    modalidad.delete()

    return Response("Item successfully deleted")

@api_view(['GET'])
def statusList(request):
    status = Status.objects.all()
    serializer = StatusSerializer(status, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def statusDetail(request, pk):
    status = Status.objects.get(id=pk)
    serializer = StatusSerializer(status, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def statusCreate(request):    
    serializer = StatusSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def statusUpdate(request, pk):    
    status = Status.objects.get(id=pk)
    serializer = StatusSerializer(instance=status, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def statusDelete(request, pk):    
    status = Status.objects.get(id=pk)
    status.delete()

    return Response("Item successfully deleted")

@api_view(['GET'])
def cicloList(request):
    ciclo = Ciclo.objects.all()
    serializer = CicloSerializer(ciclo, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def cicloDetail(request, pk):
    ciclo = Ciclo.objects.get(id=pk)
    serializer = CicloSerializer(ciclo, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def cicloCreate(request):    
    serializer = CicloSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def cicloUpdate(request, pk):    
    ciclo = Ciclo.objects.get(id=pk)
    serializer = CicloSerializer(instance=ciclo, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def cicloDelete(request, pk):    
    ciclo = Ciclo.objects.get(id=pk)
    ciclo.delete()

    return Response("Item successfully deleted")


@api_view(['GET'])
def unidadreceptoraList(request):
    unidadreceptora = UnidadReceptora.objects.all()
    serializer = UnidadReceptoraSerializer(unidadreceptora, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def unidadreceptoraDetail(request, pk):
    unidadreceptora = UnidadReceptora.objects.get(id=pk)
    serializer = UnidadReceptoraSerializer(unidadreceptora, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def unidadreceptoraCreate(request):    
    serializer = UnidadReceptoraSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def unidadreceptoraUpdate(request, pk):    
    unidadreceptora = UnidadReceptora.objects.get(id=pk)
    serializer = UnidadReceptoraSerializer(instance=unidadreceptora, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def unidadreceptoraDelete(request, pk):    
    unidadreceptora = UnidadReceptora.objects.get(id=pk)
    unidadreceptora.delete()

    return Response("Item successfully deleted")

@api_view(['GET'])
def dependenciaList(request):
    dependencia = Dependencia.objects.all()
    serializer = DependenciaSerializer(dependencia, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def dependenciaDetail(request, pk):
    dependencia = Dependencia.objects.get(id=pk)
    serializer = DependenciaSerializer(dependencia, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def dependenciaCreate(request):    
    serializer = DependenciaSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def dependenciaUpdate(request, pk):    
    dependencia = Dependencia.objects.get(id=pk)
    serializer = DependenciaSerializer(instance=dependencia, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def dependenciaDelete(request, pk):    
    dependencia = Dependencia.objects.get(id=pk)
    dependencia.delete()

    return Response("Item successfully deleted")

@api_view(['GET'])
def departamentoList(request):
    departamento = Departamento.objects.all()
    serializer = DepartamentoSerializer(departamento, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def departamentoDetail(request, pk):
    departamento = Departamento.objects.get(id=pk)
    serializer = DepartamentoSerializer(departamento, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def departamentoCreate(request):    
    serializer = DepartamentoSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def departamentoUpdate(request, pk):    
    departamento = Departamento.objects.get(id=pk)
    serializer = DepartamentoSerializer(instance=departamento, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def departamentoDelete(request, pk):    
    departamento = Departamento.objects.get(id=pk)
    departamento.delete()

    return Response("Item successfully deleted")

@api_view(['GET'])
def proyectoList(request):
    proyecto = Proyecto.objects.all()
    serializer = ProyectoSerializer(proyecto, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def proyectoDetail(request, pk):
    proyecto = Proyecto.objects.get(id=pk)
    serializer = ProyectoSerializer(proyecto, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def proyectoCreate(request):    
    serializer = ProyectoSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def proyectoUpdate(request, pk):    
    proyecto = Proyecto.objects.get(id=pk)
    serializer = ProyectoSerializer(instance=proyecto, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def proyectoDelete(request, pk):    
    proyecto = Proyecto.objects.get(id=pk)
    proyecto.delete()

    return Response("Item successfully deleted")

@api_view(['GET'])
def nivelList(request):
    nivel = Nivel.objects.all()
    serializer = NivelSerializer(nivel, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def nivelDetail(request, pk):
    nivel = Nivel.objects.get(id=pk)
    serializer = NivelSerializer(nivel, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def nivelCreate(request):    
    serializer = NivelSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def nivelUpdate(request, pk):    
    nivel = Nivel.objects.get(id=pk)
    serializer = NivelSerializer(instance=nivel, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def nivelDelete(request, pk):    
    nivel = Nivel.objects.get(id=pk)
    nivel.delete()

    return Response("Item successfully deleted")


@api_view(['GET'])
def statusbrigadistaList(request):
    statusbrigadista = StatusBrigadista.objects.all()
    serializer = StatusBrigadistaSerializer(statusbrigadista, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def statusbrigadistaDetail(request, pk):
    statusbrigadista = StatusBrigadista.objects.get(id=pk)
    serializer = StatusBrigadistaSerializer(statusbrigadista, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def statusbrigadistaCreate(request):    
    serializer = StatusBrigadistaSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def statusbrigadistaUpdate(request, pk):    
    statusbrigadista = StatusBrigadista.objects.get(id=pk)
    serializer = StatusBrigadistaSerializer(instance=statusbrigadista, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def statusbrigadistaDelete(request, pk):    
    statusbrigadista = StatusBrigadista.objects.get(id=pk)
    statusbrigadista.delete()

    return Response("Item successfully deleted")


@api_view(['GET'])
def etiquetaList(request):
    etiqueta = Etiqueta.objects.all()
    serializer = EtiquetaSerializer(etiqueta, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def etiquetaDetail(request, pk):
    etiqueta = Etiqueta.objects.get(id=pk)
    serializer = EtiquetaSerializer(etiqueta, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def etiquetaCreate(request):    
    serializer = EtiquetaSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def etiquetaUpdate(request, pk):    
    etiqueta = Etiqueta.objects.get(id=pk)
    serializer = EtiquetaSerializer(instance=etiqueta, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def etiquetaDelete(request, pk):    
    etiqueta = Etiqueta.objects.get(id=pk)
    etiqueta.delete()

    return Response("Item successfully deleted")

@api_view(['GET'])
def documentoList(request):
    documento = Documento.objects.all()
    serializer = DocumentoSerializer(documento, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def documentoDetail(request, pk):
    documento = Documento.objects.get(id=pk)
    serializer = DocumentoSerializer(documento, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def documentoCreate(request):    
    serializer = DocumentoSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def documentoUpdate(request, pk):    
    documento = Documento.objects.get(id=pk)
    serializer = DocumentoSerializer(instance=documento, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def documentoDelete(request, pk):    
    documento = Documento.objects.get(id=pk)
    documento.delete()

    return Response("Item successfully deleted")


@api_view(['GET'])
def asesorList(request):
    asesor = Asesor.objects.all()
    serializer = AsesorSerializer(asesor, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def asesorDetail(request, pk):
    asesor = Asesor.objects.get(id=pk)
    serializer = AsesorSerializer(asesor, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def asesorCreate(request):    
    serializer = AsesorSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def asesorUpdate(request, pk):    
    asesor = Asesor.objects.get(id=pk)
    serializer = AsesorSerializer(instance=asesor, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def asesorDelete(request, pk):    
    asesor = Asesor.objects.get(id=pk)
    asesor.delete()

    return Response("Item successfully deleted")


@api_view(['GET'])
def brigadistaList(request):
    brigadista = Brigadista.objects.all()
    serializer = BrigadistaSerializer(brigadista, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def brigadistaCount(request):
    brigadista = len(Brigadista.objects.all())
    return Response(brigadista)

@api_view(['GET'])
def brigadistaDetail(request, pk):
    brigadista = Brigadista.objects.get(id=pk)
    serializer = BrigadistaSerializer(brigadista, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def brigadistaCreate(request):    
    serializer = BrigadistaSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def brigadistaUpdate(request, pk):    
    brigadista = Brigadista.objects.get(id=pk)
    serializer = BrigadistaSerializer(instance=brigadista, data=request.data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)

@api_view(['DELETE'])
def brigadistaDelete(request, pk):    
    brigadista = Brigadista.objects.get(id=pk)
    brigadista.delete()

    return Response("Item successfully deleted")

