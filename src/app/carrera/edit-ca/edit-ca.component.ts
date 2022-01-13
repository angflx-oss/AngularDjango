import { Component, OnInit, Input } from '@angular/core';
import { CarrerasService } from '../service/carreras.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-ca',
  templateUrl: './edit-ca.component.html',
  styleUrls: ['./edit-ca.component.css']
})
export class EditCaComponent implements OnInit {
  @Input() id:any;
  formData!: FormGroup;
  carreraName:any;
  carreraUnidadacademica:any;
  carreraUnidadregiona:any;
  unidadesacademicas:any=[];
  unidadesregionales:any=[];
  modalidades:any=[];
  createUr!: FormGroup;
  submitted = false;

  

  constructor(private service:CarrerasService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    
    this.formData=this.builder.group(
      {
        name:[''],
        unidadacademica:[''],        
        unidadregional:[''],
        modalidad:['']
      }
    );
   
  }

  ngOnInit(): void {    
    this.getData();
    this.loadList();
  }
  loadList(){
    this.service.getUnidadesRegionales().subscribe((data:any)=>{
      this.unidadesregionales=data;
    });
    this.service.getUnidadesAcademicas().subscribe((data:any)=>{
      this.unidadesacademicas=data;
    });
    this.service.getModalidades().subscribe((data:any)=>{
      this.modalidades=data;
    });
  }
  
  editData():any{    
    this.service.updateCarrera(this.id,this.formData.value).subscribe(()=>{      
    });
    alert("Editado Correctamente");
  }

  getData(){
      this.service.getCarrera(this.id).subscribe(
        res=>{
           
          this.formData.setValue({
            name:res['name'],
            unidadacademica:res['unidadacademica'],
            unidadregional:res['unidadregional'],
            modalidad:res['modalidad']
          });          
        }        
      );    
  }

}
