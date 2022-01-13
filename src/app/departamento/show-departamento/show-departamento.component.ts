import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../service/departamentos.service';
import { Departamento } from '../departamento.interface';


@Component({
  selector: 'app-show-departamento',
  templateUrl: './show-departamento.component.html',
  styleUrls: ['./show-departamento.component.css'],
  providers: [DepartamentosService]

})
export class ShowDepartamentoComponent implements OnInit {

  departamentos!:Departamento[];  
  unidadesreceptoras!:any[];
  dependencias!:any[];
  ActivateAdd:boolean=false;
  ActivateEdit:boolean=false;

  departamento:any;  
  departamentoId!:any;
  name!:any;  
  
  
  term: any;
  term2: any;
  ModalTitle!: string;
  totalLength:any;
  page:number = 1;

  constructor(private service: DepartamentosService) { }
  title="Departamento";
  titlePlural="Departamentos";

  ngOnInit(): void {
    this.loadList();
    this.refreshDataList();    
    
    }


    addClick() {
      this.departamento={
             departamentoId:0,
             name:"",
             dependencia:"",                          
             unidadreceptora:""                          
           }    
           this.ModalTitle = "Agregar "+this.title;
  
           this.ActivateAdd=true;
    }
    editClick(id: any) {
      this.departamentoId=id;     
      this.ActivateEdit=true;
      this.ModalTitle = "Editar "+this.title;


    }
    
    refreshDataList(){
      this.service.getDepartamentos().subscribe(x => {
        this.departamentos = x;
        console.log(this.departamentos);
      });
    }

    deleteClick(id:any, iControl:any){      
      if(window.confirm("¿Desea eliminar el registro?")){
        this.service.deleteDepartamento(id).subscribe((res=>{
          this.departamento.splice(iControl);
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
    }

}
