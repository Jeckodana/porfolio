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
  
    this.ServexperienciaService.verExperiencia().subscribe(data => {
      console.log(data);
      this.experiencia = data;
      console.log(this.experiencia[0]['id']);
      console.log(this.experiencia[0]['puesto']);
      console.log(this.experiencia[0]['empresa']);
      console.log(this.experiencia[0]['fecha_inicio']);
      console.log(this.experiencia[0]['fecha_fin']);
      console.log(this.experiencia[0]['logo_empresa']);
      console.log(this.experiencia[0]['actividades']);
      console.log(this.experiencia);
      if (this.tokenService.getToken()) {
        this.logged = true;
      } else {
        this.logged = false;
      }
    });
  }
  eliminarExperiencia(id?: number){
    this.ServexperienciaService.eliminarExperiencia(id).subscribe(data =>{
      console.log(this.ServexperienciaService.eliminarExperiencia(id));
      location. reload();
      }, err => {
        alert("No se pudo eliminar el item de experiencia");
      })
  }

  // Seleccionar(experiencia: Experiencia){
  //   let link =['/editarexperiencia/'+ experiencia.id ];
  //   this.router.navigate(link);
  //   console.log(experiencia.id);
  // }

}