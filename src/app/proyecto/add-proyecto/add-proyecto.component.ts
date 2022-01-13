import { Component, Input, OnInit } from '@angular/core';
import { ProyectosService } from '../service/proyectos.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {

  action="Agregar";
  constructor(private service:ProyectosService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    this.formData=this.builder.group({
              name:[''],
              numerodeproyecto:[''],
              ciclo:[''],
              departamento:[''],
              dependencia:[''],
              unidadreceptora:[''],
              status:['']
            
    });
   }

   formData!: FormGroup;
   submitted = false;
   id:any;
   unidadesreceptoras:any=[];
   status:any=[];
   ciclos:any=[];
   departamentos:any=[];
   isShown!: boolean;
   dependencias:any=[];
   title = "Proyecto";
 
   ngOnInit(): void {
     console.log("activado");
     this.loadList();

   }

    loadList(){
      this.service.getUnidadesReceptoras().subscribe(x => {
        this.unidadesreceptoras = x;
        console.log(this.unidadesreceptoras);
      });
      this.service.getDependencias().subscribe(x => {
        this.dependencias = x;
        console.log(this.dependencias);
      });
      this.service.getDepartamentos().subscribe(x => {
        this.departamentos = x;
        console.log(this.departamentos);
      });
      this.service.getCiclos().subscribe(x => {
        this.ciclos = x;
        console.log(this.ciclos);
      });
      this.service.getStatus().subscribe(x => {
        this.status = x;
        console.log(this.status);
      });
    }
 
   addData():any{
     console.log(this.formData.value);
     this.service.addProyecto(this.formData.value).subscribe(res=>{
       
     });
     alert("Agregado Correctamente");
     this.formData.setValue({
      name:"",
      numerodeproyecto:"",
      ciclo:"",
      departamento:"",
      dependencia:"",
      unidadreceptora:"",
      status:""
     });   
   }


}
