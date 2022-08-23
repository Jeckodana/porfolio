import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ServproyectosService } from 'src/app/servicios/servproyectos.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  proyecto : Proyecto = null;
  id = 0 ;
  constructor(private ServproyectosService: ServproyectosService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe( (id:Params)=>{
      this.id = id['get']("id"); 
    });

    this.ServproyectosService.buscarProyecto(this.id).subscribe(
      data =>{
        this.proyecto = data;
        console.log(this.proyecto);
      }, err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }
  Update(): void{
    this.ServproyectosService.actualizarProyecto(this.proyecto.id, this.proyecto).subscribe(data =>{
      alert("Item proyecto actualizado.");
      this.router.navigate(['/proyectos']);
    }, err => {alert("Error la modificacion a fallado");
      this.router.navigate(['/proyectos']);
  })
}
}
