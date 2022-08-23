import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { ServskillService} from 'src/app/servicios/servskill.service';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
  skills: Skills = null;
  id = 0 ;
  constructor(private ServskillService: ServskillService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( (id:Params)=>{
      this.id = id['get']("id");
 
    });

    this.ServskillService.buscarSkills(this.id).subscribe(
      data =>{
        console.log(this.ServskillService.buscarSkills(this.id));
        this.skills = data;
        console.log(this.skills);
      }, err =>{
        alert("Error al modificar habilidad");
        this.router.navigate(['']);
      }
    )
  }

  
  Update(): void{
    this.ServskillService.actualizarSkills(this.skills.id, this.skills).subscribe(data =>{
      alert("Item habilidad actualizado.");
      this.router.navigate(['/skills']);
    }, err => {alert("Error modificacion fallida");
      this.router.navigate(['/skills']);
  })
}

}
