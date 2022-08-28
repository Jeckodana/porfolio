import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged = false;
  
  constructor(private datosPorfolio:PorfolioService, private tokenService: TokenService) { 
 

  }
  ngOnInit(): void {  
    if(this.tokenService.getToken()){
      this.logged = true;
    }else{
      this.logged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
 /* ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      console.log("Datos Personales"+JSON.stringify(data));
      this.miporfolio = data[0];
    })
  }*/

}