import { Component, OnInit } from '@angular/core';
import { UnidadesregionalesService } from '../service/unidadesregionales.service';
import { UnidadRegional } from '../unidadregional.interface';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  providers: [UnidadesregionalesService]

})
export class ShowComponent implements OnInit {

  unidadesregionales!:UnidadRegional[];
  ActivateAdd:boolean=false;
  ActivateEdit:boolean=false;
  ur:any;
  closeResult!: string;
  urId!:any;
  urName!:any;
  term: any;
  term2: any;
  cName = "Unidades Regionales";
  ModalTitle!: string;
  totalLength:any;
  page:number = 1;

  constructor(private unidadregionalSvc: UnidadesregionalesService) { }
  
  ngOnInit(): void {
    this.refreshUrList();    
    
    }
    addClick() {
      this.ur={
             urId:0,
             urName:""
           }    
           this.ModalTitle = "Agregar Unidad Regional";
  
           this.ActivateAdd=true;
    }
    editClick(id: any) {
      this.urId=id;     
      this.ActivateEdit=true;
      this.ModalTitle = "Editar Unidad Regional";


    }
    
    refreshUrList(){
      this.unidadregionalSvc.getUnidadesRegionales().subscribe(x => {
        this.unidadesregionales = x;
        this.totalLength = x.length;
        console.log(this.unidadesregionales);
      });
    }

    deleteUr(id:any, iControl:any){      
      if(window.confirm("¿Desea eliminar el registro?")){
        this.unidadregionalSvc.deleteUnidadRegional(id).subscribe((res=>{
          this.unidadesregionales.splice(iControl);
        }));
      }
      
    }

    closeClick(){
      this.refreshUrList();
      this.ActivateAdd=false;
      this.ActivateEdit=false;

    }
}