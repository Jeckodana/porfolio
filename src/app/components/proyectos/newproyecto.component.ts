import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ServproyectosService } from 'src/app/servicios/servproyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombre_proyecto: String = "";
  descripcion: String = "";
  fecha_fin: String = "";
  foto_proyecto: String = "";
  link_evidencia: String = "";

  constructor(private ServproyectosService: ServproyectosService, private router: Router) { }

  ngOnInit(): void {
  }
  OnCrear(): void {
    const proye = new Proyecto(this.nombre_proyecto, this.descripcion, this.foto_proyecto, this.fecha_fin, this.link_evidencia);
    this.ServproyectosService.agregarProyecto(proye).subscribe
    (data =>{alert("Nuevo item Proyecto agregado.");
      this.router.navigate(['/proyectos']);
    }, err => {alert("Carga de nuevo item proyecto fallida");
      this.router.navigate(['/proyectos']);
    }
  )}
}
