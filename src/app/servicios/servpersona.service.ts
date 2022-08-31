import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../models/persona';


@Injectable({
  providedIn: 'root'
})
export class ServpersonaService {
  // url = 'http://localhost:8080/persona/';
  url = 'https://backendporfolioj.herokuapp.com/persona/';

  constructor(private http: HttpClient) { }

  public verPersona(): Observable <persona>{
    return this.http.get<persona>(this.url+ 'ver');
  }
  public buscarPersona(id: number): Observable <any>{
    return this.http.get<any>(this.url+ `buscar/${id}`);

  }  
   public actualizarPersona(id: number, persona: persona): Observable <any>{
     return this.http.put<any>(this.url+ `actualizar/${id}`, persona);
   }
}
