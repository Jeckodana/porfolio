import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IniciarSesionComponent } from '../components/iniciar-sesion/iniciar-sesion.component';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="";/**url de la API */
  currentUserSubject: BehaviorSubject<any>;


  constructor(private http:HttpClient) {
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
   }
   IniciarSesionComponent(Credential:any): Observable<any> {
    return this.http.post(this.url, Credential).pipe(map(data =>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }
  get UsuarioAutenticado(){
    return this.currentUserSubject.value;
  }
}


