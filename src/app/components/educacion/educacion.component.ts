import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Educacion } from 'src/app/models/educacion';
import { ServEducacionService } from 'src/app/servicios/serveducacion.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] =[];

  constructor(private ServEducacionService: ServEducacionService, private TokenService: TokenService, public router: Router) { }
  logged = false;
 

  ngOnInit(): void {

     // Metodo para Visualizar item Educacion
    this.ServEducacionService.verEducacion().subscribe(data => {
      console.log(data);
      this.educacion = data;
      if (this.TokenService.getToken()) {
        this.logged = true;
      } else {
        this.logged = false;
      }
    });

   }

  // Metodo para Eliminar item Educacion
  eliminarEducacion(id?: number){
    this.ServEducacionService.eliminarEducacion(id).subscribe(data =>{
      console.log(this.ServEducacionService.eliminarEducacion(id));
      location. reload();//para refrescar la pagina
      }, err => {
        alert("No se pudo eliminar el item de educación");
      })
  }

 
}
