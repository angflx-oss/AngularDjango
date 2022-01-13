import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from '../service/proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  @Input() id:any;
  formData!: FormGroup;
  name:any;  
  unidadesreceptoras:any=[];
   status:any=[];
   ciclos:any=[];
   departamentos:any=[];
   dependencias:any=[];
   title = "Proyecto";
  
  submitted = false;
  action="Editar";
  


  constructor(private service:ProyectosService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    
    this.formData=this.builder.group(
      {
        name:[''],
        numerodeproyecto:[''],
        ciclo:[''],
        departamento:[''],
        dependencia:[''],
        unidadreceptora:[''],
        status:['']      
      }
    );
   
  }

  ngOnInit(): void {    
    this.getData();
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
  
  editData():any{    
    this.service.updateProyecto(this.id,this.formData.value).subscribe(()=>{      
    });
    alert("Editado Correctamente");
  }

  getData(){
      this.service.getProyecto(this.id).subscribe(
        res=>{
           
          this.formData.setValue({
            name:res['name'],
            numerodeproyecto:res['numerodeproyecto'],
            ciclo:res['ciclo'],
            departamento:res['departamento'],
            dependencia:res['dependencia'],
            unidadreceptora:res['unidadreceptora'],
            status:res['status']           
          });          
        }        
      );    
  }

}
