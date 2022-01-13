import { Component, Input, OnInit } from '@angular/core';
import { CarrerasService } from '../service/carreras.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UnidadesAcademicasService } from 'src/app/unidad-academica/service/unidadesacademicas.service';

@Component({
  selector: 'app-add-ca',
  templateUrl: './add-ca.component.html',
  styleUrls: ['./add-ca.component.css']
})
export class AddCaComponent implements OnInit {

  formUr!: FormGroup;  
  constructor(private service:CarrerasService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
   this.formUr=this.builder.group({
     name:[''],
     unidadacademica:[''],
     modalidad:[''],
     unidadregional:['']
   });
  }
  createUr!: FormGroup;
  submitted = false;
  id:any;
  unidadesregionales:any=[];
  unidadesacademicas:any=[];
  modalidades: any=[];
  

  ngOnInit(): void {
    console.log("activado");
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

  addData():any{
    console.log(this.formUr.value);
    this.service.addCarrera(this.formUr.value).subscribe(res=>{
      
    });
    alert("Agregado Correctamente");
    this.formUr.setValue({
      name:"",
      unidadacademica:"",
      modalidad:"",
      unidadregional:""
    });   
  }

}
