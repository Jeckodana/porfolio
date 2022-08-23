import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { persona } from 'src/app/models/persona';
import { ServpersonaService } from 'src/app/servicios/servpersona.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  
   miporfolio: any;
  

  constructor(public servpersona: ServpersonaService) { }

  ngOnInit(): void {
    this.servpersona.verPersona().subscribe(data => {
      console.log(data);
    
      this.miporfolio = data;
      console.log(this.miporfolio[0]['nombre']);
      console.log(this.miporfolio[0]['apellido']);
      console.log(this.miporfolio[0]['foto_perfil']);
      console.log(this.miporfolio[0]['info_profesional']);
    
    });
    
  }

}
