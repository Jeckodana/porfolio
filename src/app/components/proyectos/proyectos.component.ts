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
    this.ServproyectosService.verProyecto().subscribe(data => {
      console.log(data);
      this.proyecto = data;
      console.log(this.proyecto[0]['id']);
      console.log(this.proyecto[0]['nombre_proyecto']);
      console.log(this.proyecto[0]['descripcion']);
      console.log(this.proyecto[0]['foto_proyecto']);
      console.log(this.proyecto[0]['fecha_fin']);
      console.log(this.proyecto[0]['link_evidencia']);
      console.log(this.proyecto);
      if (this.tokenService.getToken()) {
        this.logged = true;
      } else {
        this.logged = false;
      }
    });
  }
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


