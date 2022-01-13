import { Component, Input, OnInit } from '@angular/core';
import { AsesoresService } from '../service/asesores.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-asesor',
  templateUrl: './add-asesor.component.html',
  styleUrls: ['./add-asesor.component.css']
})
export class AddAsesorComponent implements OnInit {

  action="Agregar";
  constructor(private service:AsesoresService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    this.formData=this.builder.group({
              name:[''],
              apellido1:[''],
              apellido2:[''],
              status:[''],
              telefono:[''],
              correo:[''],
              unidadacademica:['']
            
    });
   }

   formData!: FormGroup;
   submitted = false;
   id:any;
   unidadesacademicas:any=[];
   status:any=[];
   
   title = "Asesor";
 
   ngOnInit(): void {
     console.log("activado");
     this.loadList();

   }

    loadList(){
      this.service.getUnidadesAcademicas().subscribe(x => {
        this.unidadesacademicas = x;        
      });      
      this.service.getStatus().subscribe(x => {
        this.status = x;        
      }); 
    }
 
   addData():any{
     console.log(this.formData.value);
     this.service.addAsesor(this.formData.value).subscribe(res=>{
       
     });
     alert("Agregado Correctamente");
     this.formData.setValue({
      name:"",
      apellido1:"",
      apellido2:"",
      status:"",
      telefono:"",
      correo:"",
      unidadacademica:""
     });   
   }

}
