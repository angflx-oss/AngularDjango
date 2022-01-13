import { Component, OnInit } from '@angular/core';
import { AsesoresService } from '../service/asesores.service';
import { Asesor } from '../asesor';

@Component({
  selector: 'app-show-asesor',
  templateUrl: './show-asesor.component.html',
  styleUrls: ['./show-asesor.component.css']
})
export class ShowAsesorComponent implements OnInit {

  asesores!:Asesor[];  
  unidadesacademicas!:any[];
  
  ActivateAdd:boolean=false;
  ActivateEdit:boolean=false;

  asesor:any;  
  asesorId!:any;
  name!:any;  
  
  
  term: any;
  term2: any;
  ModalTitle!: string;
  totalLength:any;
  page:number = 1;

  constructor(private service: AsesoresService) { }
  title="Asesor";
  titlePlural="Asesores";

  ngOnInit(): void {
    this.loadList();
    this.refreshDataList();    
    
    }


    addClick() {
      this.asesor={
             id:0,
             name:"",
             apellido1 : "",
             apellido2 : "",
             status : "",
             telefono : "",
             correo : "",
             unidadacademica : ""   
           }    
           this.ModalTitle = "Agregar "+this.title;
  
           this.ActivateAdd=true;
    }
    editClick(id: any) {
      this.asesorId=id;     
      this.ActivateEdit=true;
      this.ModalTitle = "Editar "+this.title;


    }
    
    refreshDataList(){
      this.service.getAsesores().subscribe(x => {
        this.asesores = x;
        console.log(this.asesores);
      });
    }

    deleteClick(id:any, iControl:any){      
      if(window.confirm("¿Desea eliminar el registro?")){
        this.service.deleteAsesor(id).subscribe((res=>{
          this.asesor.splice(iControl);
        }));
      }
      
    }

    closeClick(){
      this.refreshDataList();
      this.ActivateAdd=false;
      this.ActivateEdit=false;

    }

    loadList(){
      this.service.getUnidadesAcademicas().subscribe(x => {
        this.unidadesacademicas = x;        
      });
    }

}
