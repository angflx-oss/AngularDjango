import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brigadista } from '../brigadista/brigadista';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

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
    return this.http.get<any[]>(this.APIUrl + '/api/statusbrigadista-list/');
  }
  getCiclos():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/ciclo-list/');
  }
  getUnidadesAcademicas():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/unidadacademica-list/');
  }
  getCarreras():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/carrera-list/');
  }
  getDocumentos():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/documento-list/');
  }
  getProyectos():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/proyecto-list/');
  }

  

  getBrigadistas():Observable<Brigadista[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/brigadista-list/');
  }

  
  getBrigadistaCount():Observable<any>{
    return this.http.get<any[]>(this.APIUrl + '/api/brigadista-count/');
  }
  addBrigadista(data:Brigadista):Observable<any>{
    return this.http.post(this.APIUrl +'/api/brigadista-create/',data);
  }

  getBrigadista(id:any):Observable<any>{
    return this.http.get(this.APIUrl +'/api/brigadista-detail/'+id);
  }
  deleteBrigadista(id:any):Observable<any>{
    return this.http.delete(this.APIUrl +'/api/brigadista-delete/'+id);
  }

  updateBrigadista(id:any,data:Brigadista):Observable<any>{
    return this.http.post(this.APIUrl +'/api/brigadista-update/'+id,data);
  }
  sendMessage(body: any) {
    return this.http.post('http://localhost:3000/sendmail', body);
    }
    getTag():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl + '/api/etiqueta-list/');
    }
  
}
