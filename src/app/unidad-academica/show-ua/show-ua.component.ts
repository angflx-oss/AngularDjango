import { Component, OnInit } from '@angular/core';
import { UnidadesAcademicasService } from '../service/unidadesacademicas.service';
import { UnidadRegional } from 'src/app/unidad-regional/unidadregional.interface';
import { UnidadAcademica } from '../unidadacademica.interface';

@Component({
  selector: 'app-show-ua',
  templateUrl: './show-ua.component.html',
  styleUrls: ['./show-ua.component.css'],
  providers: [UnidadesAcademicasService]
})
export class ShowUaComponent implements OnInit {

  unidadesacademicas!:UnidadAcademica[];
  ActivateAdd:boolean=false;
  ActivateEdit:boolean=false;
  ua:any;  
  uaId!:any;
  uaName!:any;
  uaUnidadRegional!:any;
  term: any;
  term2: any;
  ModalTitle!: string;

  constructor(private service: UnidadesAcademicasService) { }
  
  ngOnInit(): void {
    this.refreshUaList();    
    
    }
    addClick() {
      this.ua={
             uaId:0,
             uaName:"",
             uaUnidadRegional:""
           }    
           this.ModalTitle = "Agregar Unidad Academica";
  
           this.ActivateAdd=true;
    }
    editClick(id: any) {
      this.uaId=id;     
      this.ActivateEdit=true;
      this.ModalTitle = "Editar Unidad Academica";


    }
    
    refreshUaList(){
      this.service.getUnidadesAcademicas().subscribe(x => {
        this.unidadesacademicas = x;
        console.log(this.unidadesacademicas);
      });
    }

    deleteClick(id:any, iControl:any){      
      if(window.confirm("¿Desea eliminar el registro?")){
        this.service.deleteUnidadAcademica(id).subscribe((res=>{
          this.unidadesacademicas.splice(iControl);
        }));
      }
      
    }

    closeClick(){
      this.refreshUaList();
      this.ActivateAdd=false;
      this.ActivateEdit=false;

    }
}
