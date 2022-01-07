import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnidadRegional } from 'src/app/unidad-regional/unidadregional.interface';
import { UnidadAcademica } from '../unidadacademica.interface';
@Injectable({
  providedIn: 'root'
})
export class UnidadesAcademicasService {

  readonly APIUrl = "http://localhost:8000"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }

  getUnidadesRegionales():Observable<UnidadRegional[]>{
    return this.http.get<UnidadRegional[]>(this.APIUrl + '/api/unidadregional-list/');
  }
  getUnidadesAcademicas():Observable<UnidadAcademica[]>{
    return this.http.get<UnidadAcademica[]>(this.APIUrl + '/api/unidadacademica-list/');
  }

  addUnidadAcademica(data:UnidadAcademica):Observable<any>{
    return this.http.post(this.APIUrl +'/api/unidadacademica-create/',data);
  }

  getUnidadAcademica(id:any):Observable<any>{
    return this.http.get(this.APIUrl +'/api/unidadacademica-detail/'+id);
  }
  deleteUnidadAcademica(id:any):Observable<any>{
    return this.http.delete(this.APIUrl +'/api/unidadacademica-delete/'+id);
  }

  updateUnidadAcademica(id:any,data:UnidadAcademica):Observable<any>{
    return this.http.post(this.APIUrl +'/api/unidadacademica-update/'+id,data);
  }
}
