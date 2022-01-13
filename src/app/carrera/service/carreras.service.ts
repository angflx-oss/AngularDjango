import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnidadRegional } from 'src/app/unidad-regional/unidadregional.interface';
import { UnidadAcademica } from 'src/app/unidad-academica/unidadacademica.interface';
import { Carrera } from '../carrera.interface';

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {

  readonly APIUrl = "http://localhost:8000"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }

  getUnidadesRegionales():Observable<UnidadRegional[]>{
    return this.http.get<UnidadRegional[]>(this.APIUrl + '/api/unidadregional-list/');
  }
  getUnidadesAcademicas():Observable<UnidadAcademica[]>{
    return this.http.get<UnidadAcademica[]>(this.APIUrl + '/api/unidadacademica-list/');
  }
  getCarreras():Observable<Carrera[]>{
    return this.http.get<Carrera[]>(this.APIUrl + '/api/carrera-list/');
  }

  getModalidades():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/api/modalidad-list/');
  }
  
  addCarrera(data:Carrera):Observable<any>{
    return this.http.post(this.APIUrl +'/api/carrera-create/',data);
  }

  getCarrera(id:any):Observable<any>{
    return this.http.get(this.APIUrl +'/api/carrera-detail/'+id);
  }
  deleteCarrera(id:any):Observable<any>{
    return this.http.delete(this.APIUrl +'/api/carrera-delete/'+id);
  }

  updateCarrera(id:any,data:Carrera):Observable<any>{
    return this.http.post(this.APIUrl +'/api/carrera-update/'+id,data);
  }
}
