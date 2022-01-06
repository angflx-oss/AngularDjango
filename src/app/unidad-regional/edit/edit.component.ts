import { Component, OnInit, Input } from '@angular/core';
import { UnidadesregionalesService } from '../service/unidadesregionales.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() id:any;
  formUr!: FormGroup;
  urId:any;
  urName:any;
  

  constructor(private service:UnidadesregionalesService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    
    this.formUr=this.builder.group(
      {
        name:['']
      }
    );
   
  }

  ngOnInit(): void {    
    this.getData();
  }
  
  editUr():any{
    
    this.service.updateUnidadRegional(this.id,this.formUr.value).subscribe(()=>{      
    });
  }

  getData(){
      this.service.getUnidadRegional(this.id).subscribe(
        res=>{
           
          this.formUr.setValue({
            name:res['name']
          });          
        }        
      );    
  }

}
