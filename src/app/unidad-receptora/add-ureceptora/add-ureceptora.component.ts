import { Component, Input, OnInit } from '@angular/core';
import { UnidadesReceptorasService } from '../service/unidadesreceptoras.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-ureceptora',
  templateUrl: './add-ureceptora.component.html',
  styleUrls: ['./add-ureceptora.component.css']
})
export class AddUreceptoraComponent implements OnInit {

  action="Agregar";
  constructor(private service:UnidadesReceptorasService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    this.formData=this.builder.group({
              name:[''],
              status:['']
            
    });
   }

   formData!: FormGroup;
   submitted = false;
   id:any;
   status:any=[];
   isShown!: boolean;
   unidadesacademicas:any=[];
   
 
   ngOnInit(): void {
     console.log("activado");
     this.isShown = false; //hidden every time subscribe detects change
     this.loadList();
   }
   toggleShow() {
    this.isShown = ! this.isShown;
    }
   loadList(){
     this.service.getStatus().subscribe((data:any)=>{
       this.status=data;
     });
     this.service.getUnidadesAcademicas().subscribe((data:any)=>{
      this.unidadesacademicas=data;
    });
   }
 
   addData():any{
     console.log(this.formData.value);
     this.service.addUnidadReceptora(this.formData.value).subscribe(res=>{
       
     });
     alert("Agregado Correctamente");
     this.formData.setValue({
       name:"",
       status:""
     });   
   }


}
