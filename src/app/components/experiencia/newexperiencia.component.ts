import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServexperienciaService } from 'src/app/servicios/servexperiencia.service';
import { Experiencia } from 'src/app/models/experiecia';

@Component({
  selector: 'app-newexperiencia',
  templateUrl: './newexperiencia.component.html',
  styleUrls: ['./newexperiencia.component.css']
})
export class NewexperienciaComponent implements OnInit {
  puesto: String = "";
  empresa: String = "";
  fecha_fin: String = "";
  fecha_inicio: String = "";
  actividades: String = "";
  logo_empresa: String = "";
  
  constructor(private ServexperienciaService: ServexperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

   // Metodo para Agregar item Experiencia
  OnCrear(): void {
    const expe = new Experiencia(this.puesto, this.empresa, this.fecha_inicio, this.fecha_fin, this.actividades, this.logo_empresa);
    this.ServexperienciaService.agregarExperiencia(expe).subscribe
    (data =>{alert("Nuevo item Experiencia agregado.");
      this.router.navigate(['/experiencia']);
    }, err => {alert("Carga de nuevo item experiencia fallida");
      this.router.navigate(['/experiencia']);
    }
  )}

}
