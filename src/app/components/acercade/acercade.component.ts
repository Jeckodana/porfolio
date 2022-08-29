import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { data } from 'jquery';
import { persona } from 'src/app/models/persona';
import { ServpersonaService } from 'src/app/servicios/servpersona.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Console } from '@angular/compiler/src/util';



@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  miporfolio: any;
  id = 0 ;

  constructor(public servpersona: ServpersonaService,private activatedRouter: ActivatedRoute, private TokenService: TokenService, public router: Router) { }
  logged = false;
  ngOnInit(): void {
    this.servpersona.verPersona().subscribe(data => {
      this.miporfolio = data;
      // console.log(this.miporfolio[0]['id']);
      // console.log(this.miporfolio[0]['nombre']);
      // console.log(this.miporfolio[0]['apellido']);
      // console.log(this.miporfolio[0]['foto_perfil']);
      // console.log(this.miporfolio[0]['info_profesional']);
      if (this.TokenService.getToken()) {
        this.logged = true;
      } else {
        this.logged = false;
      }
    });

    this.activatedRouter.paramMap.subscribe( (id:Params)=>{
      this.id = id['get']("id");
    });
  
    this.servpersona.buscarPersona(this.miporfolio[0]['id']).subscribe(
      data =>{
        this.miporfolio = data;
      }, err =>{
        this.router.navigate(['']);
      }
    )
  }

  
  Update(): void{
    console.log(this.miporfolio);
    this.servpersona.actualizarPersona(this.miporfolio[0]['id'], this.miporfolio[0]).subscribe(data =>{
      alert("Datos Personales actualizados.");
      this.router.navigate(['/porfolio']);
    }, err => {alert("Error modificacion fallida");
      this.router.navigate(['/porfolio']);
  })
}

}