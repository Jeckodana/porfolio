import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiecia';
import { TokenService } from 'src/app/servicios/token.service';
import { ServexperienciaService } from 'src/app/servicios/servexperiencia.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[]=[];
 
  constructor(private ServexperienciaService: ServexperienciaService, public router: Router, private tokenService:TokenService) { }
    logged = false;
  ngOnInit(): void {
   // Metodo para Visualizar item Experiencia
    this.ServexperienciaService.verExperiencia().subscribe(data => {
      this.experiencia = data;
      if (this.tokenService.getToken()) {
        this.logged = true;
      } else {
        this.logged = false;
      }
    });
  }

   // Metodo para Eliminar item Experiencia
  eliminarExperiencia(id?: number){
    this.ServexperienciaService.eliminarExperiencia(id).subscribe(data =>{
      console.log(this.ServexperienciaService.eliminarExperiencia(id));
      location. reload();
      }, err => {
        alert("No se pudo eliminar el item de experiencia");
      })
  }

 
}