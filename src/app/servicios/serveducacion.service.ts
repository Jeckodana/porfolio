import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../models/educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServEducacionService {
 /* eduURL = 'http://localhost:8080/educacion/';

  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.eduURL + 'ver/');
  }
  public detail(id:number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.eduURL + `detail/${id}`);
  }
  public save (educacion:Educacion): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + 'agregarEducacion', educacion);
  }
  public update(id:number, educacion:Educacion): Observable<any>{
    return this.httpClient.put<any>(this.eduURL + `actualizarEducacion/${id}`, educacion);
  }
  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + `eliminarEducacion/${id}`);
  }*/
}
