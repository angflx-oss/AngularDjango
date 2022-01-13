import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DepartamentosService } from '../service/departamentos.service';

@Component({
  selector: 'app-edit-departamento',
  templateUrl: './edit-departamento.component.html',
  styleUrls: ['./edit-departamento.component.css']
})
export class EditDepartamentoComponent implements OnInit {

  @Input() id:any;
  formData!: FormGroup;
  name:any;  
  unidadesreceptoras:any=[];
  dependencias:any=[];
  
  submitted = false;
  action="Editar";
  title="Departamento";
  isShown!:boolean;

  constructor(private service:DepartamentosService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    
    this.formData=this.builder.group(
      {
        name:[''],
        dependencia:[''],
        unidadreceptora:['']        
      }
    );
   
  }

  ngOnInit(): void {    
    this.getData();
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
  
  editData():any{    
    this.service.updateDepartamento(this.id,this.formData.value).subscribe(()=>{      
    });
    alert("Editado Correctamente");
  }

  getData(){
      this.service.getDepartamento(this.id).subscribe(
        res=>{
           
          this.formData.setValue({
            name:res['name'],
            dependencia:res['dependencia'],
            unidadreceptora:res['unidadreceptora']           
          });          
        }        
      );    
  }

}
