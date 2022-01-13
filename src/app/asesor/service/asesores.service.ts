import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asesor } from '../asesor';

@Injectable({
  providedIn: 'root'
})
export class AsesoresService {

  readonly APIUrl = "http://localhost:8000"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }

  getUnidadesAcademicas():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/unidadacademica-list/');
  }
  getStatus():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/status-list/');
  }
  


  getAsesores():Observable<Asesor[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/asesor-list/');
  }
  addAsesor(data:Asesor):Observable<any>{
    return this.http.post(this.APIUrl +'/api/asesor-create/',data);
  }

  getAsesor(id:any):Observable<any>{
    return this.http.get(this.APIUrl +'/api/asesor-detail/'+id);
  }
  deleteAsesor(id:any):Observable<any>{
    return this.http.delete(this.APIUrl +'/api/asesor-delete/'+id);
  }

  updateAsesor(id:any,data:Asesor):Observable<any>{
    return this.http.post(this.APIUrl +'/api/asesor-update/'+id,data);
  }
}
