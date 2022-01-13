import { Component, Input, OnInit } from '@angular/core';
import { CiclosService } from '../service/ciclos.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-ci',
  templateUrl: './add-ci.component.html',
  styleUrls: ['./add-ci.component.css']
})
export class AddCiComponent implements OnInit {

  constructor(private service:CiclosService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
   this.formData=this.builder.group({
             name:[''],
             status:[''],
             inicio:[''],
             fin:[''],
             numdeinformes:[''],
             fase:['']
           
   });
  }
  formData!: FormGroup;
  submitted = false;
  id:any;
  status:any=[];
  

  ngOnInit(): void {
    console.log("activado");
    this.loadList();
  }
  loadList(){
    this.service.getStatus().subscribe((data:any)=>{
      this.status=data;
    });
  }

  addData():any{
    console.log(this.formData.value);
    this.service.addCiclo(this.formData.value).subscribe(res=>{
      
    });
    alert("Agregado Correctamente");
    this.formData.setValue({
      name:"",
      status:"",
      inicio:"",      
      fin:"",
      numdeinformes:"",
      fase:""
      
    });   
  }

}
