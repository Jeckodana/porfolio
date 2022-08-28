 import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService  implements HttpInterceptor{

  constructor(private autenticacionService: AutenticacionService, private tokenService: TokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       let Req = req;
       const token = this.tokenService.getToken();
       if (token !=null) {
        req = req.clone({
          headers: req.headers.set('Authorization', `Bearer` +  token)
          });
        }
        return next.handle(req);
      }
              // var currentUser=this.autenticacionService.UsuarioAutenticado;
    // if (currentUser && currentUser.accessToken){
    //   req = req.clone({
    //     setHeaders:{
    //       Authorization: 'Bearer ${currentUser.accesToken}'
    //     }
    //   })
    // }
  //   return next.handle(req);
  // }
}
// export const interceptorProvider = [{
//   provide: HTTP_INTERCEPTORS,
//   useClass: InterceptorService,
//   multi: true
// }];