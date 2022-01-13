import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from '../departamento.interface';


@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  readonly APIUrl = "http://localhost:8000"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }

  getUnidadesReceptoras():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/unidadreceptora-list/');
  }

  getDependencias():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/dependencia-list/');
  }

  getDepartamentos():Observable<Departamento[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/departamento-list/');
  }

  addDepartamento(data:Departamento):Observable<any>{
    return this.http.post(this.APIUrl +'/api/departamento-create/',data);
  }

  getDepartamento(id:any):Observable<any>{
    return this.http.get(this.APIUrl +'/api/departamento-detail/'+id);
  }
  deleteDepartamento(id:any):Observable<any>{
    return this.http.delete(this.APIUrl +'/api/departamento-delete/'+id);
  }

  updateDepartamento(id:any,data:Departamento):Observable<any>{
    return this.http.post(this.APIUrl +'/api/departamento-update/'+id,data);
  }
}
