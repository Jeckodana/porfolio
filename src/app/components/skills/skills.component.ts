import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { ServskillService } from 'src/app/servicios/servskill.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skills[]=[];


  constructor(private ServskillService: ServskillService, private TokenService: TokenService, public router: Router) { }
  logged = false;

  ngOnInit(): void {
     // Metodo para Visualizar item Skills
    this.ServskillService.verSkills().subscribe(data => {
      this.skills = data;
      if (this.TokenService.getToken()) {
        this.logged = true;
      } else {
        this.logged = false;
      }
    });
  }
 // Metodo para Eliminar item Skills
eliminarSkill(id?: number){
  this.ServskillService.eliminarSkill(id).subscribe(data =>{
    console.log(this.ServskillService.eliminarSkill(id));
    alert("Item Skill eliminado");
    location. reload();//para refrescar la pagina
    }, err => {
      alert("No se pudo eliminar el item de skill");
    })
}



}