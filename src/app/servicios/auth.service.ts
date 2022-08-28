import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { NewUser } from '../models/new-user';
import { LoginUser } from '../models/login-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  autURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

 public nuevo(newUser: NewUser): Observable<any>{
   return this.httpClient.post<any>(this.autURL + 'new', newUser);
 }

 public login(loginUser: LoginUser): Observable<JwtDto>{
   return this.httpClient.post<JwtDto>(this.autURL + 'login', loginUser)
 }
}
