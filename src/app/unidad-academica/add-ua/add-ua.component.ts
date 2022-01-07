import { Component, Input, OnInit } from '@angular/core';
import { UnidadesAcademicasService } from '../service/unidadesacademicas.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-ua',
  templateUrl: './add-ua.component.html',
  styleUrls: ['./add-ua.component.css']
})
export class AddUaComponent implements OnInit {

  formUr!: FormGroup;
  constructor(private service:UnidadesAcademicasService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
   this.formUr=this.builder.group({
     name:[''],
     unidadregional:['']
   });
  }
  createUr!: FormGroup;
  submitted = false;
  id:any;
  unidadesregionales:any=[];
  

  ngOnInit(): void {
    console.log("activado");
    this.loadList();
  }
  loadList(){
    this.service.getUnidadesRegionales().subscribe((data:any)=>{
      this.unidadesregionales=data;
    })
  }

  addUr():any{
    console.log(this.formUr.value);
    this.service.addUnidadAcademica(this.formUr.value).subscribe(res=>{
      
    });
    alert("Agregado Correctamente");
    this.formUr.setValue({
      name:"",
      unidadregional:""
    });   
  }

}
