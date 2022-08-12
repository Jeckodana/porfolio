import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { ServEducacionService } from 'src/app/servicios/serveducacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

   educa: Educacion[] =[];

  constructor(private ServEducacionService: ServEducacionService, private TokenService: TokenService) { }
  islogged = false;

  ngOnInit(): void {
    /*this.cargarEducacion();
    if(this.TokenService.getToken()){
      this.islogged = true;
    } else{
      this.islogged = false;
    }
  }
  cargarEducacion(): void{
    this.ServEducacionService.lista().subscribe(data =>{this.educa = data;})
  }
  delete(id?: number){
    if (id != undefined){
      this.ServEducacionService.delete(id).subscribe(data =>{this.cargarEducacion();
        }, err => {
          alert("No se pudo eliminar el item de educación");
        })
    }*/
  }
}
