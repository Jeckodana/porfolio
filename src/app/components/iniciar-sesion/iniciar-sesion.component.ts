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
  // form:FormGroup;
  // valid = false;
  // invalid= true;
  isLogged = false;
  isLogginFail = false;
  loginUser!: LoginUser;
  username!: string;
  password! : string;
  roles: string[] = [];
  mensaje!: string;

  constructor(private formBuilder:FormBuilder, private tokenService: TokenService, private authService: AuthService, private router: Router) { 
    // this.form = this.formBuilder.group({
    //   username:['',[ Validators.required]],
    //   password:['',[ Validators.required]]
    // });

  // form:FormGroup;

  // constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) {
  //   this.form = this.formBuilder.group({
  //     email:['',[ Validators.required, Validators.email]],
  //     password:['',[ Validators.required, Validators.minLength(8)]],
  //     deviceInfo: this.formBuilder.group({
  //       deviceId:['17967868768'],
  //       deviceType:['DEVICE-TYPE-ANDROID'],
  //       notificationToken:['6765757Seececc34']
  //     })
  //   })
  //  }
  }


  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  
    // if(this.form.valid){
    //   this.valid = true;
    //   this.invalid = false;
    // }

  }

  onLogin(): void{
    this.loginUser = new LoginUser(this.username, this.password); 
    this.authService.login(this.loginUser).subscribe(data =>{
        // this.valid = true;
        // this.invalid = false;
        // this.isLogged = true;
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


  // get Email(){
  //   return this.form.get('email');
  // }
  // get Password(){
  //   return this.form.get('password');
  // }
  // onEnviar(event:Event){
  //   event.preventDefault;
  //   this.autenticacionService.IniciarSesionComponent(this.form.value).subscribe(data =>{
  //     console.log("DATA:" +JSON.stringify(data));
  //     this.ruta.navigate(['/porfolio']);
  //   })

  // }

}
