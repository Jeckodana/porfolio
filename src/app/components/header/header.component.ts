import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 // miporfolio:any;
  
  constructor(private datosPorfolio:PorfolioService) { 
 

  }
  ngOnInit(): void {  
  }

 /* ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      console.log("Datos Personales"+JSON.stringify(data));
      this.miporfolio = data[0];
    })
  }*/

}
