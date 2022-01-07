import { Component, OnInit, Input } from '@angular/core';
import { UnidadesAcademicasService } from '../service/unidadesacademicas.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-ua',
  templateUrl: './edit-ua.component.html',
  styleUrls: ['./edit-ua.component.css']
})
export class EditUaComponent implements OnInit {
  @Input() id:any;
  formUa!: FormGroup;
  uaId:any;
  uaName:any;
  uaUnidadregiona:any;
  unidadesregionales:any=[];
  createUr!: FormGroup;
  submitted = false;

  

  constructor(private service:UnidadesAcademicasService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    
    this.formUa=this.builder.group(
      {
        name:[''],
        unidadregional:['']
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
    })
  }
  
  editUa():any{    
    this.service.updateUnidadAcademica(this.id,this.formUa.value).subscribe(()=>{      
    });
    alert("Editado Correctamente");
  }

  getData(){
      this.service.getUnidadAcademica(this.id).subscribe(
        res=>{
           
          this.formUa.setValue({
            name:res['name'],
            unidadregional:res['unidadregional']
          });          
        }        
      );    
  }

}
