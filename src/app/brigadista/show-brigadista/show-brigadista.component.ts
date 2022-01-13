import { Component, OnInit } from '@angular/core';
import { BrigadistasService } from '../service/brigadistas.service';
import { Brigadista } from '../brigadista';

@Component({
  selector: 'app-show-brigadista',
  templateUrl: './show-brigadista.component.html',
  styleUrls: ['./show-brigadista.component.css']
})
export class ShowBrigadistaComponent implements OnInit {

  brigadistas!:Brigadista[];  
  ciclos!:any[];
  status!:any[];
  carreras!:any[];
  unidadesacademicas!:any[];
  proyectos!:any[];
  departamentos!:any[];
  dependencias!:any[];
  unidadesreceptoras!:any[];
  documentos!:any[];

  
  ActivateAdd:boolean=false;
  ActivateEdit:boolean=false;

  brigadista:any;  
  brigadistaId!:any;
  name!:any;  
  
  
  term: any;
  term2: any;
  ModalTitle!: string;
  totalLength:any;
  page:number = 1;

  constructor(private service: BrigadistasService) { }
  title="Brigadista";
  titlePlural="Brigadistas";

  ngOnInit(): void {
    this.loadList();
    this.refreshDataList();    
    
    }


    addClick() {
      this.brigadista={
             id:0,
             numerodecuenta:"",
             name:"",
             apellido1:"",
             apellido2:"",
             ciclo:"",
             status:"",
             correo:"",
             telefono:"",
             carrera:"",
             unidadacademica:"",
             proyecto:"",
             departamento:"",
             dependencia:"",
             unidadreceptora:"",
             inicio:"",
             fin:"",
             documento:""  
           }    
           this.ModalTitle = "Agregar "+this.title;
  
           this.ActivateAdd=true;
    }
    editClick(id: any) {
      this.brigadistaId=id;     
      this.ActivateEdit=true;
      this.ModalTitle = "Editar "+this.title;


    }
    
    refreshDataList(){
      this.service.getBrigadistas().subscribe(x => {
        this.brigadistas = x;
        
      });
    }

    deleteClick(id:any, iControl:any){      
      if(window.confirm("¿Desea eliminar el registro?")){
        this.service.deleteBrigadista(id).subscribe((res=>{
          this.brigadista.splice(iControl);
        }));
      }
      
    }

    closeClick(){
      this.refreshDataList();
      this.ActivateAdd=false;
      this.ActivateEdit=false;

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

}
