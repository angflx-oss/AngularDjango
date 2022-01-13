import { Component, OnInit } from '@angular/core';
import { Carrera } from '../carrera.interface';
import { CarrerasService } from '../service/carreras.service';

@Component({
  selector: 'app-show-ca',
  templateUrl: './show-ca.component.html',
  styleUrls: ['./show-ca.component.css'],
  providers: [CarrerasService]
})
export class ShowCaComponent implements OnInit {

  carreras!:Carrera[];
  unidadesregionales!:any[];
  unidadesacademicas!:any[];
  ActivateAdd:boolean=false;
  ActivateEdit:boolean=false;
  carrera:any;  
  carreraId!:any;
  carreraName!:any;
  carreraUnidadRegional!:any;
  carreraUnidadAcademica!:any;
  term: any;
  term2: any;
  ModalTitle!: string;
  totalLength:any;
  page:number = 1;

  constructor(private service: CarrerasService) { }
  
  ngOnInit(): void {
    this.loadList();
    this.refreshUaList();    
    
    }


    addClick() {
      this.carrera={
             carreraId:0,
             carreraName:"",
             carreraUnidadAcademica:"",
             carreraUnidadRegional:""
             
           }    
           this.ModalTitle = "Agregar Carrera";
  
           this.ActivateAdd=true;
    }
    editClick(id: any) {
      this.carreraId=id;     
      this.ActivateEdit=true;
      this.ModalTitle = "Editar Carrera";


    }
    
    refreshUaList(){
      this.service.getCarreras().subscribe(x => {
        this.carreras = x;
        console.log(this.carreras);
      });
    }

    deleteClick(id:any, iControl:any){      
      if(window.confirm("¿Desea eliminar el registro?")){
        this.service.deleteCarrera(id).subscribe((res=>{
          this.carreras.splice(iControl);
        }));
      }
      
    }

    closeClick(){
      this.refreshUaList();
      this.ActivateAdd=false;
      this.ActivateEdit=false;

    }

    loadList(){
      this.service.getUnidadesRegionales().subscribe((data:any)=>{
        this.unidadesregionales=data;
      });
      this.service.getUnidadesAcademicas().subscribe((data:any)=>{
        this.unidadesacademicas=data;
      });
    }
}
