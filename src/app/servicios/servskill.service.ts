import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class ServskillService {
  skurl: String  = 'http://localhost:8080/skill/';

  constructor(private http: HttpClient) { }
 
  public verSkills(): Observable <any>{
    return this.http.get<any>(this.skurl+ 'ver');
  }
 
  public buscarSkills(id: number): Observable <any>{
   return this.http.get<any>(this.skurl+ `buscar/${id}`);
 }
  
  public agregarSkills(skills: Skills): Observable <any>{
    return this.http.post<any>(this.skurl+ 'new', skills);
  }
  public actualizarSkills(id: number, skills: Skills): Observable <any>{
    return this.http.put<any>(this.skurl+ `actualizar/${id}`, skills);
  }
  public eliminarSkill(id:number): Observable <any>{
   return this.http.delete<any>(this.skurl+ `borrar/${id}`);
  }
 
}
