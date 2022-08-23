import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ServproyectosService {
  proyurl: String  = 'http://localhost:8080/proyecto/';
  
  constructor(private http: HttpClient) { }
  public verProyecto(): Observable <any>{
    return this.http.get<any>(this.proyurl+ 'ver');
  }
 
  public buscarProyecto(id: number): Observable <any>{
   return this.http.get<any>(this.proyurl+ `buscar/${id}`);
 }
  
  public agregarProyecto(proyecto: Proyecto): Observable <any>{
    return this.http.post<any>(this.proyurl+ 'new', proyecto);
  }
  public actualizarProyecto(id: number, proyecto: Proyecto): Observable <any>{
    return this.http.put<any>(this.proyurl+ `actualizar/${id}`, proyecto);
  }
  public eliminarProyecto(id:number): Observable <any>{
   return this.http.delete<any>(this.proyurl+ `borrar/${id}`);
  }
}
