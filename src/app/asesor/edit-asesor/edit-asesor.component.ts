import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AsesoresService } from '../service/asesores.service';

@Component({
  selector: 'app-edit-asesor',
  templateUrl: './edit-asesor.component.html',
  styleUrls: ['./edit-asesor.component.css']
})
export class EditAsesorComponent implements OnInit {

  @Input() id:any;  
  name:any;  
  formData!: FormGroup;
   submitted = false;   
   unidadesacademicas:any=[];
   status:any=[];
   
   title = "Asesor";
  action="Editar";
  


  constructor(private service:AsesoresService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    
    this.formData=this.builder.group(
      {
              name:[''],
              apellido1:[''],
              apellido2:[''],
              status:[''],
              telefono:[''],
              correo:[''],
              unidadacademica:['']
      }
    );
   
  }

  ngOnInit(): void {    
    this.getData();
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
  
  editData():any{    
    this.service.updateAsesor(this.id,this.formData.value).subscribe(()=>{      
    });
    alert("Editado Correctamente");
  }

  getData(){
      this.service.getAsesor(this.id).subscribe(
        res=>{
           
          this.formData.setValue({
            name:res['name'],
            apellido1:res['apellido1'],
            apellido2:res['apellido2'],
            status:res['status'],
            telefono:res['telefono'],
            correo:res['correo'],
            unidadacademica:res['unidadacademica'],
            
          });          
        }        
      );    
  }


}
