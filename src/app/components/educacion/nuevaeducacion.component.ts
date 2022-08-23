import { Component, OnInit } from '@angular/core';
import { ServEducacionService } from 'src/app/servicios/serveducacion.service';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';

@Component({
  selector: 'app-nuevaeducacion',
  templateUrl: './nuevaeducacion.component.html',
  styleUrls: ['./nuevaeducacion.component.css']
})
export class NuevaeducacionComponent implements OnInit {
  titulo: String = "";
  institucion: String = "";
  periodo: String = "";
  logo_institucion: String = "";

  constructor(private ServEducacionService: ServEducacionService, private router: Router) { }

  ngOnInit(): void {
  }
  OnCrear(): void {
    const educa = new Educacion(this.titulo, this.institucion, this.periodo, this.logo_institucion);
    this.ServEducacionService.agregarEducacion(educa).subscribe
    (data =>{alert("Nuevo item Educacion agregado.");
      this.router.navigate(['/educacion']);
    }, err => {alert("Carga de nuevo item educacion fallida");
      this.router.navigate(['/educacion']);
    }
  )}
}


