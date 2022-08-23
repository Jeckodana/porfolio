import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../models/educacion';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServEducacionService {
 edurl: String  = 'http://localhost:8080/educacion/';

 constructor(private http: HttpClient) { }

 public verEducacion(): Observable <any>{
   return this.http.get<any>(this.edurl+ 'ver');
 }

 public buscarEducacion(id: number): Observable <any>{
  return this.http.get<any>(this.edurl+ `buscar/${id}`);
}
 
 public agregarEducacion(educacion: Educacion): Observable <any>{
   return this.http.post<any>(this.edurl+ 'new', educacion);
 }
 public actualizarEducacion(id: number, educacion: Educacion): Observable <any>{
   return this.http.put<any>(this.edurl+ `actualizar/${id}`, educacion);
 }
 public eliminarEducacion(id:number): Observable <any>{
  return this.http.delete<any>(this.edurl+ `borrar/${id}`);
 }

}
