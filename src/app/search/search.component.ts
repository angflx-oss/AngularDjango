import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Brigadista } from '../brigadista/brigadista';
import { GeneralService } from '../services/general.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[GeneralService]
})
export class SearchComponent implements OnInit {
  keyword = 'name';
  brigadista!:any[];
  addBrigadista!:Brigadista[];
  data!:any[];
  keywords = ['name','numerodecuenta','telefono','correo']
  public data$!: Observable<any[]>;
  activate:boolean=false;
  formData!: FormGroup;
  brigadistaId!:any;
  ActivateEdit:boolean=false;
  ActivateAdd:boolean=false;
  id!:string;
  


  constructor(private service:GeneralService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    this.formData=this.builder.group(
      {
        numdecuenta:[''],        
        ciclo:[''],      
        nombre:[''],        
        apellido1:[''],     
        mail:[''],        
        phone:[''],      
        status:[''],        
        carrera:[''],   
        unidadacademica:[''],        
        unidadreceptora:[''],      
        dependencia:[''],        
        departamento:[''],     
        proyecto:[''],        
        inicio:[''],      
        fin:[''],        
        documento:[''],  
        numerodeinforme:[''],  
      }
    );
  }

  ngOnInit(): void {
      this.loadData();
  }
  sendMail() {
    
    this.ActivateEdit=true;          

  }
  
  selectEvent(item: any) {
    this.service.getBrigadista(item.id).subscribe(x=>{
     this.brigadista = x;
      this.activate=true; 
      this.formData.setValue({
        numdecuenta:x['numerodecuenta'],
        ciclo:x['ciclo'],
        nombre:x['name'],
        apellido1:x['apellido1']+ " "+x['apellido2'],
        mail:x['correo'],
        phone:x['telefono'],
        status:x['status'],
        carrera:x['carrera'],
        unidadacademica:x['unidadacademica'],        
        unidadreceptora:x['unidadreceptora'],      
        dependencia:x['dependencia'],        
        departamento:x['departamento'],     
        proyecto:x['proyecto'],        
        inicio:x['inicio'],      
        fin:x['fin'],        
        documento:x['documento'],  
        numerodeinforme:x['numerodeinforme'],
  
      });          
    })
  }
  
  closeClick(){
    
    this.ActivateEdit=false;

  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e: any){
    // do something when input is focused
  }
  loadData(){
    this.service.getBrigadistas().subscribe(x=>{
      this.data = x
    });
  }

}