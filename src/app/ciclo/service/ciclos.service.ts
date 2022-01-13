import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ciclo } from '../ciclos.interface';

@Injectable({
  providedIn: 'root'
})
export class CiclosService {

  readonly APIUrl = "http://localhost:8000"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }

  getCiclos():Observable<Ciclo[]>{
    return this.http.get<Ciclo[]>(this.APIUrl + '/api/ciclo-list/');
  }
  getStatus():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/status-list/');
  }
  
  
  addCiclo(data:Ciclo):Observable<any>{
    return this.http.post(this.APIUrl +'/api/ciclo-create/',data);
  }

  getCiclo(id:any):Observable<any>{
    return this.http.get(this.APIUrl +'/api/ciclo-detail/'+id);
  }
  deleteCiclo(id:any):Observable<any>{
    return this.http.delete(this.APIUrl +'/api/ciclo-delete/'+id);
  }

  updateCiclo(id:any,data:Ciclo):Observable<any>{
    return this.http.post(this.APIUrl +'/api/ciclo-update/'+id,data);
  }
}
