import { Component, Input, OnInit } from '@angular/core';
import { DepartamentosService } from '../service/departamentos.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-departamento',
  templateUrl: './add-departamento.component.html',
  styleUrls: ['./add-departamento.component.css']
})
export class AddDepartamentoComponent implements OnInit {

  action="Agregar";
  constructor(private service:DepartamentosService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    this.formData=this.builder.group({
              name:[''],         
              dependencia:[''],              
              unidadreceptora:['']

            
    });
   }

   formData!: FormGroup;
   submitted = false;
   id:any;
   ciclos:any=[];
   unidadesreceptoras:any=[];
   departamentos:any=[];
   dependencias:any=[];
   status:any=[];

   title = "Departamento";
 
   ngOnInit(): void {
     console.log("activado");
     this.loadList();

   }

   loadList(){
     this.service.getUnidadesReceptoras().subscribe((data:any)=>{
       this.unidadesreceptoras=data;
     });
     this.service.getDependencias().subscribe((data:any)=>{
      this.dependencias=data;
    });
   }
 
   addData():any{
     console.log(this.formData.value);
     this.service.addDepartamento(this.formData.value).subscribe(res=>{
       
     });
     alert("Agregado Correctamente");
     this.formData.setValue({
       name:"",
       dependencia:"",
       unidadreceptora:""
     });   
   }


}
