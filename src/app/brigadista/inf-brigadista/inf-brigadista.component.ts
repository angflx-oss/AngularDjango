import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BrigadistasService } from '../service/brigadistas.service';

@Component({
  selector: 'app-inf-brigadista',
  templateUrl: './inf-brigadista.component.html',
  styleUrls: ['./inf-brigadista.component.css']
})
export class InfBrigadistaComponent implements OnInit {

  constructor(private service:BrigadistasService, private builder: FormBuilder, private activeRoute:ActivatedRoute) { 
    this.formData=this.builder.group(
      {
        documento:[''],
        numerodeinforme:['']
      }
    );
  }
  @Input() id:any;  
  name:any;  
  formData!: FormGroup;
   submitted = false;   
   ciclos!:any[];
  status!:any[];
  carreras!:any[];
  unidadesacademicas!:any[];
  proyectos!:any[];
  departamentos!:any[];
  dependencias!:any[];
  unidadesreceptoras!:any[];
  documentos!:any[];
   title = "Brigadista";
 
  action="Editar";
  
  ngOnInit(): void {
    this.getData();
    this.loadList();
  }
  loadList(){
    this.service.getCiclos().subscribe(x => {
      this.ciclos = x;        
    });
    this.service.getStatus().subscribe(x => {
      this.status = x;        
    });
    this.service.getCarreras().subscribe(x => {
      this.carreras = x;        
    });
    this.service.getUnidadesAcademicas().subscribe(x => {
      this.unidadesacademicas = x;        
    });
    this.service.getProyectos().subscribe(x => {
      this.proyectos = x;        
    });
    this.service.getDepartamentos().subscribe(x => {
      this.departamentos = x;        
    });
    this.service.getDependencias().subscribe(x => {
      this.dependencias = x;        
    });
    this.service.getUnidadesReceptoras().subscribe(x => {
      this.unidadesreceptoras = x;        
    });
    this.service.getDocumentos().subscribe(x => {
      this.documentos = x;        
    });
  }
  
  editData():any{    
    this.service.updateBrigadista(this.id,this.formData.value).subscribe(()=>{      
    });
    alert("Editado Correctamente");
  }

  getData(){
      this.service.getBrigadista(this.id).subscribe(
        res=>{
           
          this.formData.setValue({      
            documento:res['documento'],
            numerodeinforme:res['numerodeinforme']
          });          
        }        
      );    
  }

}
