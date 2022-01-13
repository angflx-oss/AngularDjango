import { Component, OnInit } from '@angular/core';
import { BrigadistasService } from '../service/brigadistas.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-brigadista',
  templateUrl: './add-brigadista.component.html',
  styleUrls: ['./add-brigadista.component.css']
})
export class AddBrigadistaComponent implements OnInit {

  action="Agregar";
  constructor(private service:BrigadistasService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    this.formData=this.builder.group({
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
            
    });
   }

   formData!: FormGroup;
   submitted = false;
   id:any;
   
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
 
   ngOnInit(): void {
     console.log("activado");
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

 
   addData():any{
     console.log(this.formData.value);
     this.service.addBrigadista(this.formData.value).subscribe(res=>{
       
     });
     alert("Agregado Correctamente");
     this.formData.setValue({
      numerodecuenta:"",
      name:"",
      apellido1:"",
      apellido2:"",
      ciclo:"",
      status:"",
      correo:"",
      telefono:"",
      carrera:"",
      unidadacademica:"",
      proyecto:"",
      departamento:"",
      dependencia:"",
      unidadreceptora:"",
      inicio:"",
      fin:"",
      documento:"",
      numerodeinforme:""
     });   
   }


}
