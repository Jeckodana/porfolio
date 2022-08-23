import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { ServEducacionService} from 'src/app/servicios/serveducacion.service';
import { Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
 educacion: Educacion = null;
  id = 0 ;
  constructor(private ServEducacionService: ServEducacionService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.activatedRouter.paramMap.subscribe( (id:Params)=>{
      this.id = id['get']("id");
 
    });

    this.ServEducacionService.buscarEducacion(this.id).subscribe(
      data =>{
        console.log(this.ServEducacionService.buscarEducacion(this.id));
        this.educacion = data;
        console.log(this.educacion);
      }, err =>{
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
    )
  }

  
  Update(): void{
    this.ServEducacionService.actualizarEducacion(this.educacion.id, this.educacion).subscribe(data =>{
      alert("Item educacion actualizado.");
      this.router.navigate(['/educacion']);
    }, err => {alert("Error modificacion fallida");
      this.router.navigate(['/educacion']);
  })
}
}