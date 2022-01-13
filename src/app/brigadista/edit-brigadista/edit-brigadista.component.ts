import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BrigadistasService } from '../service/brigadistas.service';

@Component({
  selector: 'app-edit-brigadista',
  templateUrl: './edit-brigadista.component.html',
  styleUrls: ['./edit-brigadista.component.css']
})
export class EditBrigadistaComponent implements OnInit {

  @Input() id:any;  
  name:any;  
  formData!: FormGroup;
   submitted = false;   
   ciclos!:any[];
  status!:any[];
  carreras!:any[];
  unidadesacademicas!:any[];
  proyectos!:any[];
  departamentos!:any[];
  dependencias!:any[];
  unidadesreceptoras!:any[];
  documentos!:any[];
   title = "Brigadista";
 
  action="Editar";
  


  constructor(private service:BrigadistasService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    
    this.formData=this.builder.group(
      {
        numerodecuenta:[''],
        name:[''],
        apellido1:[''],
        apellido2:[''],
        ciclo:[''],
        status:[''],
        correo:[''],
        telefono:[''],
        carrera:[''],
        unidadacademica:[''],
        proyecto:[''],
        departamento:[''],
        dependencia:[''],
        unidadreceptora:[''],
        inicio:[''],
        fin:[''],
        documento:[''],
        numerodeinforme:['']
      }
    );
   
  }

  ngOnInit(): void {    
    this.getData();
    this.loadList();
  }
  
  loadList(){
    this.service.getCiclos().subscribe(x => {
      this.ciclos = x;        
    });
    this.service.getStatus().subscribe(x => {
      this.status = x;        
    });
    this.service.getCarreras().subscribe(x => {
      this.carreras = x;        
    });
    this.service.getUnidadesAcademicas().subscribe(x => {
      this.unidadesacademicas = x;        
    });
    this.service.getProyectos().subscribe(x => {
      this.proyectos = x;        
    });
    this.service.getDepartamentos().subscribe(x => {
      this.departamentos = x;        
    });
    this.service.getDependencias().subscribe(x => {
      this.dependencias = x;        
    });
    this.service.getUnidadesReceptoras().subscribe(x => {
      this.unidadesreceptoras = x;        
    });
    this.service.getDocumentos().subscribe(x => {
      this.documentos = x;        
    });
  }
  
  editData():any{    
    this.service.updateBrigadista(this.id,this.formData.value).subscribe(()=>{      
    });
    alert("Editado Correctamente");
  }

  getData(){
      this.service.getBrigadista(this.id).subscribe(
        res=>{
           
          this.formData.setValue({
            numerodecuenta:res['numerodecuenta'],
            name:res['name'],
            apellido1:res['apellido1'],
            apellido2:res['apellido2'],
            ciclo:res['ciclo'],
            status:res['status'],
            correo:res['correo'],
            telefono:res['telefono'],
            carrera:res['carrera'],
            unidadacademica:res['unidadacademica'],
            proyecto:res['proyecto'],
            departamento:res['departamento'],
            dependencia:res['dependencia'],
            unidadreceptora:res['unidadreceptora'],
            inicio:res['inicio'],
            fin:res['fin'],
            documento:res['documento'],
            numerodeinforme:res['numerodeinforme']
          });          
        }        
      );    
  }



}
