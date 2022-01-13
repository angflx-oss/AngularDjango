import { Component, OnInit } from '@angular/core';
import { DependenciasService } from '../service/dependencias.service';
import { Dependencia } from '../dependencias.interface';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css'],
  providers: [DependenciasService]
})
export class ShowDepComponent implements OnInit {
  dependencias!:Dependencia[];  
  unidadesreceptoras!:any[];
  ActivateAdd:boolean=false;
  ActivateEdit:boolean=false;

  dependencia:any;  
  dependenciaId!:any;
  name!:any;  
  
  
  term: any;
  term2: any;
  ModalTitle!: string;
  totalLength:any;
  page:number = 1;

  constructor(private service: DependenciasService) { }
  title="Dependencia";
  titlePlural="Dependencias";

  ngOnInit(): void {
    this.loadList();
    this.refreshDataList();    
    
    }


    addClick() {
      this.dependencia={
             dependenciaId:0,
             name:"",
             unidadreceptora:""                          
           }    
           this.ModalTitle = "Agregar Dependencia";
  
           this.ActivateAdd=true;
    }
    editClick(id: any) {
      this.dependenciaId=id;     
      this.ActivateEdit=true;
      this.ModalTitle = "Editar Dependencia";


    }
    
    refreshDataList(){
      this.service.getDependencias().subscribe(x => {
        this.dependencias = x;
        console.log(this.dependencias);
      });
    }

    deleteClick(id:any, iControl:any){      
      if(window.confirm("¿Desea eliminar el registro?")){
        this.service.deleteDependencia(id).subscribe((res=>{
          this.dependencia.splice(iControl);
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
    }


}
