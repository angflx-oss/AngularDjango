import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../proyectos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  readonly APIUrl = "http://localhost:8000"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }

  getUnidadesReceptoras():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/unidadreceptora-list/');
  }
  getDependencias():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/dependencia-list/');
  }
  getDepartamentos():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/departamento-list/');
  }
  getStatus():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/status-list/');
  }
  getCiclos():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/ciclo-list/');
  }


  getProyectos():Observable<Proyecto[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/proyecto-list/');
  }
  addProyecto(data:Proyecto):Observable<any>{
    return this.http.post(this.APIUrl +'/api/proyecto-create/',data);
  }

  getProyecto(id:any):Observable<any>{
    return this.http.get(this.APIUrl +'/api/proyecto-detail/'+id);
  }
  deleteProyecto(id:any):Observable<any>{
    return this.http.delete(this.APIUrl +'/api/proyecto-delete/'+id);
  }

  updateProyecto(id:any,data:Proyecto):Observable<any>{
    return this.http.post(this.APIUrl +'/api/proyecto-update/'+id,data);
  }
}
