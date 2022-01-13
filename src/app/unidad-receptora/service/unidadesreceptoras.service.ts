import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnidadReceptora } from '../unidadreceptora.interface';


@Injectable({
  providedIn: 'root'
})
export class UnidadesReceptorasService {

  readonly APIUrl = "http://localhost:8000"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }

  getUnidadesReceptoras():Observable<UnidadReceptora[]>{
    return this.http.get<UnidadReceptora[]>(this.APIUrl + '/api/unidadreceptora-list/');
  }
  getStatus():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/status-list/');
  }
  getUnidadesAcademicas():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/unidadacademica-list/');
  }
  
  addUnidadReceptora(data:UnidadReceptora):Observable<any>{
    return this.http.post(this.APIUrl +'/api/unidadreceptora-create/',data);
  }

  getUnidadReceptora(id:any):Observable<any>{
    return this.http.get(this.APIUrl +'/api/unidadreceptora-detail/'+id);
  }
  deleteUnidadReceptora(id:any):Observable<any>{
    return this.http.delete(this.APIUrl +'/api/unidadreceptora-delete/'+id);
  }

  updateUnidadReceptora(id:any,data:UnidadReceptora):Observable<any>{
    return this.http.post(this.APIUrl +'/api/unidadreceptora-update/'+id,data);
  }
}
