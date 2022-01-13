import { Component, OnInit } from '@angular/core';
import { Ciclo } from '../ciclos.interface';
import { CiclosService } from '../service/ciclos.service';

@Component({
  selector: 'app-show-ci',
  templateUrl: './show-ci.component.html',
  styleUrls: ['./show-ci.component.css'],
  providers: [CiclosService]
})
export class ShowCiComponent implements OnInit {

  ciclos!:Ciclo[];
  status!:any[];
  ActivateAdd:boolean=false;
  ActivateEdit:boolean=false;
  ciclo:any;  
  cicloId!:any;
  name!:any;
  inicio!:any;
  fin!:any;
  numerodeinformes!:any;
  fase!:any;
  term: any;
  term2: any;
  ModalTitle!: string;
  totalLength:any;
  page:number = 1;

  constructor(private service: CiclosService) { }
  
  ngOnInit(): void {
    this.loadList();
    this.refreshDataList();    
    
    }


    addClick() {
      this.ciclo={
             cicloId:0,
             name:"",
             status:"",
             inicio:"",
             fin:"",
             numdeinformes:"",
             fase:"",
             
             
           }    
           this.ModalTitle = "Agregar Ciclo";
  
           this.ActivateAdd=true;
    }
    editClick(id: any) {
      this.cicloId=id;     
      this.ActivateEdit=true;
      this.ModalTitle = "Editar Ciclo";


    }
    
    refreshDataList(){
      this.service.getCiclos().subscribe(x => {
        this.ciclos = x;
        console.log(this.ciclos);
      });
    }

    deleteClick(id:any, iControl:any){      
      if(window.confirm("¿Desea eliminar el registro?")){
        this.service.deleteCiclo(id).subscribe((res=>{
          this.ciclos.splice(iControl);
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
    }
}
