import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BrigadistasService } from '../brigadista/service/brigadistas.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})
export class MailsComponent implements OnInit {

  constructor(public _MessageService: BrigadistasService,  private builder: FormBuilder, private activeRoute:ActivatedRoute) {
    this.formData=this.builder.group({
      subject:[''],
      message:[''],
      email:[''],      
    
});
  }
  tags:any=[];
  Selectedtags:string[]=[];
  dropdownSettings = {};
   formData!: FormGroup;
   nuevo = '';
   submitted = false;
   ngOnInit(): void {
    this.getData();  
    this.loadData();  

   }

   sendData():any{
    console.log(this.formData.value);
    this._MessageService.sendMessage(this.formData.value).subscribe(res=>{
      
    });
    alert("Enviado Correctamente");
 
  }

  
  getData(){
    // this._MessageService.getBrigadista(this.id).subscribe(
    //   res=>{
         
    //     this.formData.setValue({  
    //       subject:[''],
    //       message:[''],
    //       email:res['correo'],

    //     });          
    //   }        
    // );    
}
  loadData(){
    this._MessageService.getTag().subscribe(x => {
      console.log(x);
      this.tags = x;        
    });
}


}
