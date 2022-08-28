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
    this.ServskillService.verSkills().subscribe(data => {
      console.log(data);
      this.skills = data;
      console.log(this.skills[0]['id']);
      console.log(this.skills[0]['habilidad']);
      console.log(this.skills[0]['nivel']);
      console.log(this.skills[0]['detalle']);
      console.log(this.skills);
      if (this.TokenService.getToken()) {
        this.logged = true;
      } else {
        this.logged = false;
      }
    });
  }

eliminarSkill(id?: number){
  this.ServskillService.eliminarSkill(id).subscribe(data =>{
    console.log(this.ServskillService.eliminarSkill(id));
    alert("Item Skill eliminado");
    location. reload();//metodo para refrescar la pagina
    }, err => {
      alert("No se pudo eliminar el item de skill");
    })
}

// Seleccionar(Skills: Skills){
//   let link =['/editarskilln/'+ skills.id ];
//   this.router.navigate(link);
//   console.log(skills.id);
// }


}