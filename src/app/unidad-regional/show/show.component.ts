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
  ModalTitle = "Agregar Unidad Regional";
  ActivateAddEditUrComp:boolean=false;
  ur:any;
  closeResult!: string;
  urId!:any;
  urName!:any;
  term: any;
  term2: any;
  cName = "Unidades Regionales";
  constructor(private unidadregionalSvc: UnidadesregionalesService) { }
  
  ngOnInit(): void {
    this.refreshUrList();    
    
    }
    addClick() {
      this.ur={
             urId:0,
             urName:""
           }      
    }
    editClick(id: any) {
      this.urId=id;     
    }
    
    refreshUrList(){
      this.unidadregionalSvc.getUnidadesRegionales().subscribe(x => {
        this.unidadesregionales = x;
        console.log(this.unidadesregionales);
      });
    }

    deleteUr(id:any, iControl:any){      
      if(window.confirm("¿Desea eliminar el registro?")){
        this.unidadregionalSvc.deleteUnidadRegional(id).subscribe((res=>{
          this.unidadesregionales.splice(iControl,);
        }));
      }
      
    }

    closeClick(){
      this.refreshUrList();
    }
}