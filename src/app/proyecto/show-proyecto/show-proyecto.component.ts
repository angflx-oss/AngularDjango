import { Component, OnInit } from '@angular/core';
import { ProyectosService } from '../service/proyectos.service';
import { Proyecto } from '../proyectos.interface';

@Component({
  selector: 'app-show-proyecto',
  templateUrl: './show-proyecto.component.html',
  styleUrls: ['./show-proyecto.component.css']
})
export class ShowProyectoComponent implements OnInit {

  proyectos!:Proyecto[];  
  unidadesreceptoras!:any[];
  dependencias!:any[];
  departamentos!:any[];
  status!:any[];
  ciclos!:any[];
  ActivateAdd:boolean=false;
  ActivateEdit:boolean=false;

  proyecto:any;  
  proyectoId!:any;
  name!:any;  
  
  
  term: any;
  term2: any;
  ModalTitle!: string;
  totalLength:any;
  page:number = 1;

  constructor(private service: ProyectosService) { }
  title="Proyecto";
  titlePlural="Proyectos";

  ngOnInit(): void {
    this.loadList();
    this.refreshDataList();    
    
    }


    addClick() {
      this.proyecto={
             proyectoId:0,
             name:"",
             numerodeproyecto : "",
             ciclo : "",
             departamento : "",
             dependencia : "",
             unidadreceptora : "",
             status : ""   ,
           }    
           this.ModalTitle = "Agregar "+this.title;
  
           this.ActivateAdd=true;
    }
    editClick(id: any) {
      this.proyectoId=id;     
      this.ActivateEdit=true;
      this.ModalTitle = "Editar "+this.title;


    }
    
    refreshDataList(){
      this.service.getProyectos().subscribe(x => {
        this.proyectos = x;
        console.log(this.proyectos);
      });
    }

    deleteClick(id:any, iControl:any){      
      if(window.confirm("¿Desea eliminar el registro?")){
        this.service.deleteProyecto(id).subscribe((res=>{
          this.proyecto.splice(iControl);
        }));
      }
      
    }

    closeClick(){
      this.refreshDataList();
      this.ActivateAdd=false;
      this.ActivateEdit=false;

    }

    loadList(){
      this.service.getUnidadesReceptoras().subscribe(x => {
        this.unidadesreceptoras = x;
        console.log(this.unidadesreceptoras);
      });
      this.service.getDependencias().subscribe(x => {
        this.dependencias = x;
        console.log(this.dependencias);
      });
      this.service.getDepartamentos().subscribe(x => {
        this.departamentos = x;
        console.log(this.departamentos);
      });
      this.service.getCiclos().subscribe(x => {
        this.ciclos = x;
        console.log(this.ciclos);
      });
      this.service.getStatus().subscribe(x => {
        this.status = x;
        console.log(this.status);
      });
    }

}
