import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiecia';
import { ServexperienciaService } from 'src/app/servicios/servexperiencia.service';
import { data } from 'jquery';

@Component({
  selector: 'app-editexperiencia',
  templateUrl: './editexperiencia.component.html',
  styleUrls: ['./editexperiencia.component.css']
})
export class EditexperienciaComponent implements OnInit {
  experiencia : Experiencia = null;
  id = 0 ;

  constructor(private ServexperienciaService: ServexperienciaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

 // Metodo para Obtener id item Experiencia
    this.activatedRouter.paramMap.subscribe( (id:Params)=>{
      this.id = id['get']("id"); 
    });

 // Metodo para Buscar item Experiencia
    this.ServexperienciaService.buscarExperiencia(this.id).subscribe(
      data =>{
        this.experiencia = data;
        console.log(this.experiencia);
      }, err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
    )
  }

   // Metodo para Actualizar item Experiencia
  Update(): void{
    this.ServexperienciaService.actualizarExperiencia(this.experiencia.id, this.experiencia).subscribe(data =>{
      alert("Item experiencia actualizado.");
      this.router.navigate(['/experiencia']);
    }, err => {alert("Error la modificacion a fallado");
      this.router.navigate(['/experiencia']);
  })
}
}

