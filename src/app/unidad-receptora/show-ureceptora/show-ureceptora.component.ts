import { Component, OnInit } from '@angular/core';
import { UnidadesReceptorasService } from '../service/unidadesreceptoras.service';
import { UnidadReceptora } from '../unidadreceptora.interface';

@Component({
  selector: 'app-show-ureceptora',
  templateUrl: './show-ureceptora.component.html',
  styleUrls: ['./show-ureceptora.component.css'],
  providers: [UnidadesReceptorasService]

})
export class ShowUreceptoraComponent implements OnInit {

  unidadesreceptoras!:UnidadReceptora[];
  status!:any[];
  unidadesacademicas!:any[];
  ActivateAdd:boolean=false;
  ActivateEdit:boolean=false;

  unidadreceptora:any;  
  unidadreceptoraId!:any;
  name!:any;  
  
  term: any;
  term2: any;
  ModalTitle!: string;
  totalLength:any;
  page:number = 1;

  constructor(private service: UnidadesReceptorasService) { }
  
  ngOnInit(): void {
    this.loadList();
    this.refreshDataList();    
    
    }


    addClick() {
      this.unidadreceptora={
             unidadreceptoraId:0,
             name:"",
             status:""                          
           }    
           this.ModalTitle = "Agregar Unidad Receptora";
  
           this.ActivateAdd=true;
    }
    editClick(id: any) {
      this.unidadreceptoraId=id;     
      this.ActivateEdit=true;
      this.ModalTitle = "Editar Unidad Receptora";


    }
    
    refreshDataList(){
      this.service.getUnidadesReceptoras().subscribe(x => {
        this.unidadesreceptoras = x;
        console.log(this.unidadesreceptoras);
      });
    }

    deleteClick(id:any, iControl:any){      
      if(window.confirm("¿Desea eliminar el registro?")){
        this.service.deleteUnidadReceptora(id).subscribe((res=>{
          this.unidadesreceptoras.splice(iControl);
        }));
      }
      
    }

    closeClick(){
      this.refreshDataList();
      this.ActivateAdd=false;
      this.ActivateEdit=false;

    }

    loadList(){
      this.service.getStatus().subscribe((data:any)=>{
        this.status=data;
      });
      this.service.getUnidadesAcademicas().subscribe(x => {
        this.unidadesacademicas = x;
        console.log(this.unidadesacademicas);
      });
    }

}
