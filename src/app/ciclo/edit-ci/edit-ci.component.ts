import { Component, OnInit, Input } from '@angular/core';
import { CiclosService } from '../service/ciclos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-ci',
  templateUrl: './edit-ci.component.html',
  styleUrls: ['./edit-ci.component.css']
})
export class EditCiComponent implements OnInit {
  @Input() id:any;
  formData!: FormGroup;
  name:any;  
  inicio:any;
  fin:any;
  numdeinformes:any;
  fase:any;
  status:any=[];  
  submitted = false;

  

  constructor(private service:CiclosService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    
    this.formData=this.builder.group(
      {
        name:[''],
        status:[''],
        inicio:[''],
        fin:[''],
        numdeinformes:[''],
        fase:['']
      }
    );
   
  }

  ngOnInit(): void {    
    this.getData();
    this.loadList();
  }

  loadList(){
    this.service.getStatus().subscribe((data:any)=>{
      this.status=data;
    });
  }
  
  editData():any{    
    this.service.updateCiclo(this.id,this.formData.value).subscribe(()=>{      
    });
    alert("Editado Correctamente");
  }

  getData(){
      this.service.getCiclo(this.id).subscribe(
        res=>{
           
          this.formData.setValue({
            name:res['name'],
            status:res['status'],
            inicio:res['inicio'],
            fin:res['fin'],
            numdeinformes:res['numdeinformes'],
            fase:res['fase']
          });          
        }        
      );    
  }


}
