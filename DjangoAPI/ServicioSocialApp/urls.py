from django.core.mail import send_mail
from django.urls import path

from .import email
from . import views

urlpatterns=[
    path('unidadregional-list/', views.urList, name='unidadregional-list'),    
    path('unidadregional-detail/<str:pk>/', views.urDetail, name='unidadregional-detail'),    
    path('unidadregional-create/', views.urCreate, name='unidadregional-create'),
    path('unidadregional-update/<str:pk>', views.urUpdate, name='unidadregional-update'),
    path('unidadregional-delete/<str:pk>', views.urDelete, name='unidadregional-delete'),

    path('unidadacademica-list/', views.uaList, name='unidadacademica-list'),    
    path('unidadacademica-detail/<str:pk>/', views.uaDetail, name='unidadacademica-detail'),    
    path('unidadacademica-create/', views.uaCreate, name='unidadacademica-create'),
    path('unidadacademica-update/<str:pk>', views.uaUpdate, name='unidadacademica-update'),
    path('unidadacademica-delete/<str:pk>', views.uaDelete, name='unidadacademica-delete'),

    path('carrera-list/', views.carreraList, name='carrera-list'),    
    path('carrera-detail/<str:pk>/', views.carreraDetail, name='carrera-detail'),    
    path('carrera-create/', views.carreraCreate, name='carrera-create'),
    path('carrera-update/<str:pk>', views.carreraUpdate, name='carrera-update'),
    path('carrera-delete/<str:pk>', views.carreraDelete, name='carrera-delete'),

    path('modalidad-list/', views.modalidadList, name='modalidad-list'),    
    path('modalidad-detail/<str:pk>/', views.modalidadDetail, name='modalidad-detail'),    
    path('modalidad-create/', views.modalidadCreate, name='modalidad-create'),
    path('modalidad-update/<str:pk>', views.modalidadUpdate, name='modalidad-update'),
    path('modalidad-delete/<str:pk>', views.modalidadDelete, name='modalidad-delete'),

    path('status-list/', views.statusList, name='status-list'),    
    path('status-detail/<str:pk>/', views.statusDetail, name='status-detail'),    
    path('status-create/', views.statusCreate, name='status-create'),
    path('status-update/<str:pk>', views.statusUpdate, name='status-update'),
    path('status-delete/<str:pk>', views.statusDelete, name='status-delete'),

    
    path('ciclo-list/', views.cicloList, name='ciclo-list'),    
    path('ciclo-detail/<str:pk>/', views.cicloDetail, name='ciclo-detail'),    
    path('ciclo-create/', views.cicloCreate, name='ciclo-create'),
    path('ciclo-update/<str:pk>', views.cicloUpdate, name='ciclo-update'),
    path('ciclo-delete/<str:pk>', views.cicloDelete, name='ciclo-delete'),

    path('unidadreceptora-list/', views.unidadreceptoraList, name='unidadreceptora-list'),    
    path('unidadreceptora-detail/<str:pk>/', views.unidadreceptoraDetail, name='unidadreceptora-detail'),    
    path('unidadreceptora-create/', views.unidadreceptoraCreate, name='unidadreceptora-create'),
    path('unidadreceptora-update/<str:pk>', views.unidadreceptoraUpdate, name='unidadreceptora-update'),
    path('unidadreceptora-delete/<str:pk>', views.unidadreceptoraDelete, name='unidadreceptora-delete'),

    path('dependencia-list/', views.dependenciaList, name='dependencia-list'),    
    path('dependencia-detail/<str:pk>/', views.dependenciaDetail, name='dependencia-detail'),    
    path('dependencia-create/', views.dependenciaCreate, name='dependencia-create'),
    path('dependencia-update/<str:pk>', views.dependenciaUpdate, name='dependencia-update'),
    path('dependencia-delete/<str:pk>', views.dependenciaDelete, name='dependencia-delete'),

    path('departamento-list/', views.departamentoList, name='departamento-list'),    
    path('departamento-detail/<str:pk>/', views.departamentoDetail, name='departamento-detail'),    
    path('departamento-create/', views.departamentoCreate, name='departamento-create'),
    path('departamento-update/<str:pk>', views.departamentoUpdate, name='departamento-update'),
    path('departamento-delete/<str:pk>', views.departamentoDelete, name='departamento-delete'),

    path('proyecto-list/', views.proyectoList, name='proyecto-list'),    
    path('proyecto-detail/<str:pk>/', views.proyectoDetail, name='proyecto-detail'),    
    path('proyecto-create/', views.proyectoCreate, name='proyecto-create'),
    path('proyecto-update/<str:pk>', views.proyectoUpdate, name='proyecto-update'),
    path('proyecto-delete/<str:pk>', views.proyectoDelete, name='proyecto-delete'),

    path('nivel-list/', views.nivelList, name='nivel-list'),    
    path('nivel-detail/<str:pk>/', views.nivelDetail, name='nivel-detail'),    
    path('nivel-create/', views.nivelCreate, name='nivel-create'),
    path('nivel-update/<str:pk>', views.nivelUpdate, name='nivel-update'),
    path('nivel-delete/<str:pk>', views.nivelDelete, name='nivel-delete'),

    path('statusbrigadista-list/', views.statusbrigadistaList, name='statusbrigadista-list'),    
    path('statusbrigadista-detail/<str:pk>/', views.statusbrigadistaDetail, name='statusbrigadista-detail'),    
    path('statusbrigadista-create/', views.statusbrigadistaCreate, name='statusbrigadista-create'),
    path('statusbrigadista-update/<str:pk>', views.statusbrigadistaUpdate, name='statusbrigadista-update'),
    path('statusbrigadista-delete/<str:pk>', views.statusbrigadistaDelete, name='statusbrigadista-delete'),

    path('etiqueta-list/', views.etiquetaList, name='etiqueta-list'),    
    path('etiqueta-detail/<str:pk>/', views.etiquetaDetail, name='etiqueta-detail'),    
    path('etiqueta-create/', views.etiquetaCreate, name='etiqueta-create'),
    path('etiqueta-update/<str:pk>', views.etiquetaUpdate, name='etiqueta-update'),
    path('etiqueta-delete/<str:pk>', views.etiquetaDelete, name='etiqueta-delete'),

    path('documento-list/', views.documentoList, name='documento-list'),    
    path('documento-detail/<str:pk>/', views.documentoDetail, name='documento-detail'),    
    path('documento-create/', views.documentoCreate, name='documento-create'),
    path('documento-update/<str:pk>', views.documentoUpdate, name='documento-update'),
    path('documento-delete/<str:pk>', views.documentoDelete, name='documento-delete'),

    path('asesor-list/', views.asesorList, name='asesor-list'),    
    path('asesor-detail/<str:pk>/', views.asesorDetail, name='asesor-detail'),    
    path('asesor-create/', views.asesorCreate, name='asesor-create'),
    path('asesor-update/<str:pk>', views.asesorUpdate, name='asesor-update'),
    path('asesor-delete/<str:pk>', views.asesorDelete, name='asesor-delete'),

    path('brigadista-list/', views.brigadistaList, name='brigadista-list'),    
    path('brigadista-count/', views.brigadistaCount, name='brigadista-count'),    
    path('brigadista-detail/<str:pk>/', views.brigadistaDetail, name='brigadista-detail'),    
    path('brigadista-create/', views.brigadistaCreate, name='brigadista-create'),
    path('brigadista-update/<str:pk>', views.brigadistaUpdate, name='brigadista-update'),
    path('brigadista-delete/<str:pk>', views.brigadistaDelete, name='brigadista-delete'),
    
    path('send_email/', views.send_mail),
]
