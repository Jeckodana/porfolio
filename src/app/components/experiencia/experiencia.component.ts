import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiecia';
import { TokenService } from 'src/app/servicios/token.service';
import { ServexperienciaService } from 'src/app/servicios/servexperiencia.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia[]=[];
  // constructor(private ServexperienciaService: ServexperienciaService, private tokenService:TokenService) { }
  constructor(private ServexperienciaService: ServexperienciaService, public router: Router) { }
    // isLogged = false;
  ngOnInit(): void {
   /* this.agregarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged =true;
    } else{
      this.isLogged=false;
    }*/
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
    });
  }
  eliminarExperiencia(id?: number){
    this.ServexperienciaService.eliminarExperiencia(id).subscribe(data =>{
      console.log(this.ServexperienciaService.eliminarExperiencia(id));
      location. reload();//metodo para refrescar la pagina
      }, err => {
        alert("No se pudo eliminar el item de experiencia");
      })
  }

  Seleccionar(experiencia: Experiencia){
    let link =['/editarexperiencia/'+ experiencia.id ];
    this.router.navigate(link);
    console.log(experiencia.id);
  }

}