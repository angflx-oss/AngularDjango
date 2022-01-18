import { Component, OnInit } from '@angular/core';
import { Brigadista } from '../brigadista/brigadista';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ciclos!:any[];
  status!:any[];
  carreras!:any[];
  unidadesacademicas!:any[];
  proyectos!:any[];
  departamentos!:any[];
  dependencias!:any[];
  unidadesreceptoras!:any[];
  documentos!:any[];
  brigadistas!:Brigadista[];
  brigadistasCount!:any[];
  addBrigadista!:Brigadista[];
  
  ActivateAdd:boolean=false;
  ActivateEdit:boolean=false;

  brigadista:any;  
  brigadistaId!:any;
  name!:any;  
  count=0;  
  countCiclos=0;  
  
  
  term = "Activo";
  term2: any;
  ModalTitle!: string;
  totalLength:any;
  page:number = 1;
  

  constructor(private service: GeneralService) { }
  title="Brigadista";
  titlePlural="Brigadistas";

  ngOnInit(): void {
    this.loadList();
    this.refreshDataList();    
    
    }

    
    editClick(id: any) {
      this.brigadistaId=id;     
      this.ActivateEdit=true;
      this.ModalTitle = "Editar "+this.title;


    }
    sendMail(id: any) {
      this.brigadistaId=id;
      this.ActivateEdit=true;          

    }
    refreshDataList(){
      
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
      this.service.getBrigadistas().subscribe(x => {
        this.brigadistas = x;         
        // const arr = this.brigadistas.map(elemento => Object.entries(elemento));
        // this.count = arr[0][6];
        for(let i = 0; i < this.brigadistas.length; i++) {
          console.log(this.brigadistas[i].status);  // (o el campo que necesites)
          if(this.brigadistas[i].status == "Brigadista"){
            this.count +=1;
          }
      }                
      });
      this.service.getCiclos().subscribe(x => {
        this.ciclos = x;         
        // const arr = this.brigadistas.map(elemento => Object.entries(elemento));
        // this.count = arr[0][6];
        for(let i = 0; i < this.ciclos.length; i++) {
          console.log(this.ciclos[i].status);  // (o el campo que necesites)
          if(this.ciclos[i].status == "Activo"){
            this.countCiclos +=1;
          }
      }                
      });
      
      this.service.getBrigadistaCount().subscribe(x => {
        this.brigadistasCount = x;                       
      });   
      this.service.getStatus().subscribe(x => {
        this.status = x;        
      });
      this.service.getCiclos().subscribe(x => {
        this.ciclos = x;        
        
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
