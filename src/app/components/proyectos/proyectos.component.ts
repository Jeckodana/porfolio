import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ServproyectosService } from 'src/app/servicios/servproyectos.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: Proyecto[]=[];
  constructor(private ServproyectosService: ServproyectosService, private router: Router, private tokenService:TokenService) { }
   logged = false;

  ngOnInit(): void {
     // Metodo para Visualizar item Proyecto
    this.ServproyectosService.verProyecto().subscribe(data => {
      this.proyecto = data;
      if (this.tokenService.getToken()) {
        this.logged = true;
      } else {
        this.logged = false;
      }
    });
  }

   // Metodo para Eliminar item Proyecto
  eliminarProyecto(id?: number){
    this.ServproyectosService.eliminarProyecto(id).subscribe(data =>{
      console.log(this.ServproyectosService.eliminarProyecto(id));
      alert("Item proyecto eliminado");
      location. reload();//metodo para refrescar la pagina
      }, err => {
        alert("No se pudo eliminar el item de experiencia");
      })
  }
}


