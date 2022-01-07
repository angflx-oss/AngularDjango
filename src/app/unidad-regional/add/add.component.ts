import { Component, Input, OnInit } from '@angular/core';
import { UnidadesregionalesService } from '../service/unidadesregionales.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formUr!: FormGroup;
  constructor(private service:UnidadesregionalesService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
   this.formUr=this.builder.group({
     name:['']
   });
  }
  createUr!: FormGroup;
  submitted = false;
  id:any;

  ngOnInit(): void {
    console.log("activado");
  }

  addUr():any{
    console.log(this.formUr.value);
    this.service.addUnidadRegional(this.formUr.value).subscribe(res=>{
      
    });
    alert("Agregado Correctamente");
    this.formUr.setValue({
      name:"",
      
    });   
  }
  

}
