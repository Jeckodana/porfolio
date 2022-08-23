import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Educacion } from 'src/app/models/educacion';
import { ServEducacionService } from 'src/app/servicios/serveducacion.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] =[];

  /*constructor(private ServEducacionService: ServEducacionService, private TokenService: TokenService) { }
  islogged = false;*/
  constructor(public ServEducacionService: ServEducacionService, public router: Router){}

  ngOnInit(): void {
    this.ServEducacionService.verEducacion().subscribe(data => {
      console.log(data);
      this.educacion = data;
      console.log(this.educacion[0]['id']);
      console.log(this.educacion[0]['titulo']);
      console.log(this.educacion[0]['institucion']);
      console.log(this.educacion[0]['periodo']);
      console.log(this.educacion);
    });

   /* this.ServEducacionService.agregarEducacion().subscribe(data =>{this.educacion = data;});
    /*if(this.TokenService.getToken()){
      this.islogged = true;
    } else{
      this.islogged = false;
    }*/
   
  }
  eliminarEducacion(id?: number){
    this.ServEducacionService.eliminarEducacion(id).subscribe(data =>{
      console.log(this.ServEducacionService.eliminarEducacion(id));
      location. reload();//metodo para refrescar la pagina
      }, err => {
        alert("No se pudo eliminar el item de educación");
      })
  }

  Seleccionar(educacion: Educacion){
    let link =['/editareducacion/'+ educacion.id ];
    this.router.navigate(link);
    console.log(educacion.id);
  }
}
