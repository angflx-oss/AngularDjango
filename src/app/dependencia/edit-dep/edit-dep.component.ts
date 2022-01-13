import { Component, OnInit, Input } from '@angular/core';
import { DependenciasService } from '../service/dependencias.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-dep',
  templateUrl: './edit-dep.component.html',
  styleUrls: ['./edit-dep.component.css']
})
export class EditDepComponent implements OnInit {

  @Input() id:any;
  formData!: FormGroup;
  name:any;  
  unidadesreceptoras:any=[];
  
  submitted = false;
  action="Editar";
  isShown!:boolean;

  constructor(private service:DependenciasService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    
    this.formData=this.builder.group(
      {
        name:[''],
        unidadreceptora:['']        
      }
    );
   
  }

  ngOnInit(): void {    
    this.getData();
    this.loadList();
    this.isShown=false;
  }
  toggleShow() {
    this.isShown = ! this.isShown;
    }
  loadList(){
    this.service.getUnidadesReceptoras().subscribe((data:any)=>{
      this.unidadesreceptoras=data;
    });
  }
  
  editData():any{    
    this.service.updateDependencia(this.id,this.formData.value).subscribe(()=>{      
    });
    alert("Editado Correctamente");
  }

  getData(){
      this.service.getDependencia(this.id).subscribe(
        res=>{
           
          this.formData.setValue({
            name:res['name'],
            unidadreceptora:res['unidadreceptora']           
          });          
        }        
      );    
  }
}
