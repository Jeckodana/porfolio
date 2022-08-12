import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../models/persona';


@Injectable({
  providedIn: 'root'
})
export class ServpersonaService {
  url = 'http://localhost:8080/persona/';

  constructor(private http: HttpClient) { }

  public verPersona(): Observable <persona>{
    console.log(persona+"servicio agregar persona fncionando");
    return this.http.get<persona>(this.url+ 'ver');
    console.log(persona+"servicio agregar persona fncionando");
  }
}
