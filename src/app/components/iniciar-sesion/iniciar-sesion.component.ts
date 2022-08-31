import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  
  isLogged = false;
  isLogginFail = false;
  loginUser!: LoginUser;
  username!: string;
  password! : string;
  roles: string[] = [];
  mensaje!: string;

  constructor(private formBuilder:FormBuilder, private tokenService: TokenService, private authService: AuthService, private router: Router) { 
  
  }


  ngOnInit(): void {

    // Metodo para verificar si el usuario esta logeado
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  
   

  }

  onLogin(): void{
     // Metodo para Login 
    this.loginUser = new LoginUser(this.username, this.password); 
    this.authService.login(this.loginUser).subscribe(data =>{
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/porfolio'])
      }, err =>{alert("Login fallido");
        this.isLogged = false;
        this.isLogginFail = true;
        this.mensaje = err.error.mensaje;
        console.log(this.mensaje);
        
      })
  }



}
