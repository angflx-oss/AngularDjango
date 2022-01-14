import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BrigadistasService } from '../service/brigadistas.service';


@Component({
  selector: 'app-mail-brigadista',
  templateUrl: './mail-brigadista.component.html',
  styleUrls: ['./mail-brigadista.component.css']
})
export class MailBrigadistaComponent implements OnInit {

  constructor(public _MessageService: BrigadistasService,  private builder: FormBuilder, private activeRoute:ActivatedRoute) {
    this.formData=this.builder.group({
      subject:[''],
      message:[''],
      email:[''],      
    
});
  }
  
   formData!: FormGroup;
   submitted = false;
   ngOnInit(): void {
       
   }

   sendData():any{
    console.log(this.formData.value);
    this._MessageService.sendMessage(this.formData.value).subscribe(res=>{
      
    });
    alert("Enviado Correctamente");
 
  }

}
