import { Component, Input, OnInit } from '@angular/core';
import { DependenciasService } from '../service/dependencias.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-dep',
  templateUrl: './add-dep.component.html',
  styleUrls: ['./add-dep.component.css']
})
export class AddDepComponent implements OnInit {

  action="Agregar";
  constructor(private service:DependenciasService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    this.formData=this.builder.group({
              name:[''],
              unidadreceptora:['']
            
    });
   }

   formData!: FormGroup;
   submitted = false;
   id:any;
   unidadesreceptoras:any=[];
   isShown!: boolean;
   unidadesacademicas:any=[];
   
 
   ngOnInit(): void {
     console.log("activado");
     this.loadList();
     this.isShown = false; //hidden every time subscribe detects change

   }
   toggleShow() {
    this.isShown = ! this.isShown;
    }

   loadList(){
     this.service.getUnidadesReceptoras().subscribe((data:any)=>{
       this.unidadesreceptoras=data;
     });
     this.service.getUnidadesAcademicas().subscribe((data:any)=>{
      this.unidadesacademicas=data;
    });
   }
 
   addData():any{
     console.log(this.formData.value);
     this.service.addDependencia(this.formData.value).subscribe(res=>{
       
     });
     alert("Agregado Correctamente");
     this.formData.setValue({
       name:"",
       unidadreceptora:""
     });   
   }


}
