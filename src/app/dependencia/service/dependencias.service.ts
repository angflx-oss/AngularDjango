import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dependencia } from '../dependencias.interface';


@Injectable({
  providedIn: 'root'
})
export class DependenciasService {

  readonly APIUrl = "http://localhost:8000"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }

  getUnidadesReceptoras():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/unidadreceptora-list/');
  }
  getUnidadesAcademicas():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/unidadacademica-list/');
  }

  getDependencias():Observable<Dependencia[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/dependencia-list/');
  }
  
  addDependencia(data:Dependencia):Observable<any>{
    return this.http.post(this.APIUrl +'/api/dependencia-create/',data);
  }

  getDependencia(id:any):Observable<any>{
    return this.http.get(this.APIUrl +'/api/dependencia-detail/'+id);
  }
  deleteDependencia(id:any):Observable<any>{
    return this.http.delete(this.APIUrl +'/api/dependencia-delete/'+id);
  }

  updateDependencia(id:any,data:Dependencia):Observable<any>{
    return this.http.post(this.APIUrl +'/api/dependencia-update/'+id,data);
  }
}
