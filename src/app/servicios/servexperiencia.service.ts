import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiecia';


@Injectable({
  providedIn: 'root'
})
export class ServexperienciaService {
  // exurl: String  = 'http://localhost:8080/experiencia/';
  exurl: String  = 'https://backendporfolioj.herokuapp.com/experiencia/';

  constructor(private http: HttpClient) { }

  public verExperiencia(): Observable <any>{
    return this.http.get<any>(this.exurl+ 'ver');
  }

  public buscarExperiencia(id: number): Observable <any>{
    return this.http.get<any>(this.exurl+ `buscar/${id}`);
  }
 
 public agregarExperiencia(experiencia: Experiencia): Observable <any>{
   return this.http.post<any>(this.exurl+ 'new', experiencia);
 }
 
 public actualizarExperiencia(id: number, experiencia: Experiencia): Observable <any>{
   return this.http.put<any>(this.exurl+ `actualizar/${id}`, experiencia);
 }

 public eliminarExperiencia(id:number): Observable <any>{
  return this.http.delete<any>(this.exurl+ `borrar/${id}`);
 }

}