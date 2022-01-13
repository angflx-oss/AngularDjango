import { Component, OnInit, Input } from '@angular/core';
import { UnidadesReceptorasService } from '../service/unidadesreceptoras.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-ureceptora',
  templateUrl: './edit-ureceptora.component.html',
  styleUrls: ['./edit-ureceptora.component.css']
})
export class EditUreceptoraComponent implements OnInit {
  @Input() id:any;
  formData!: FormGroup;
  name:any;  
  unidadesacademicas:any=[];
  status:any=[];  
  submitted = false;
  isShown!:boolean;

  

  constructor(private service:UnidadesReceptorasService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    
    this.formData=this.builder.group(
      {
        name:[''],
        status:['']        
      }
    );
   
  }

  ngOnInit(): void {    
    this.getData();
    this.loadList();
    this.isShown=false;
  }
  loadList(){
    this.service.getStatus().subscribe((data:any)=>{
      this.status=data;
    });
    this.service.getUnidadesAcademicas().subscribe((data:any)=>{
      this.unidadesacademicas=data;
    });
  }
  
  editData():any{    
    this.service.updateUnidadReceptora(this.id,this.formData.value).subscribe(()=>{      
    });
    alert("Editado Correctamente");
  }

  getData(){
      this.service.getUnidadReceptora(this.id).subscribe(
        res=>{
           
          this.formData.setValue({
            name:res['name'],
            status:res['status']           
          });          
        }        
      );    
  }
  toggleShow() {
    this.isShown = ! this.isShown;
    }
}
