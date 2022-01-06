import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnidadRegional } from '../unidadregional.interface';

@Injectable({
  providedIn: 'root'
})
export class UnidadesregionalesService {

  readonly APIUrl = "http://localhost:8000"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }

  getUnidadesRegionales():Observable<UnidadRegional[]>{
    return this.http.get<UnidadRegional[]>(this.APIUrl + '/api/unidadregional-list/');
  }

  addUnidadRegional(data:UnidadRegional):Observable<any>{
    return this.http.post(this.APIUrl +'/api/unidadregional-create/',data);
  }

  getUnidadRegional(id:any):Observable<any>{
    return this.http.get(this.APIUrl +'/api/unidadregional-detail/'+id);
  }
  deleteUnidadRegional(id:any):Observable<any>{
    return this.http.delete(this.APIUrl +'/api/unidadregional-delete/'+id);
  }

  updateUnidadRegional(id:any,data:UnidadRegional):Observable<any>{
    return this.http.post(this.APIUrl +'/api/unidadregional-update/'+id,data);
  }
}
