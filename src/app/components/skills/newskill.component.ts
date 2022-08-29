import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { ServskillService} from 'src/app/servicios/servskill.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})
export class NewskillComponent implements OnInit {
  habilidad: String = "";
  detalle: String = "";
  nivel: number = 1;
  // valid = false;
 

  constructor(private formBuilder:FormBuilder, private ServskillService: ServskillService, private router: Router) {}

    // form1 = this.formBuilder.group({
    //   username:['',[ Validators.required]],
    //   password:['',[ Validators.required]]
    // });
   

  ngOnInit(): void {
    // if(this.form1.valid){
    //   this.valid = true;
    // } else{
    //   this.valid = false;
   
    // }
  }

  

  OnCrear(): void {
    const skill = new Skills(this.habilidad, this.nivel, this.detalle,);
    this.ServskillService.agregarSkills(skill).subscribe
    (data =>{alert("Nuevo item Educacion agregado.");
      this.router.navigate(['/skills']);
    }, err => {alert("Carga de nuevo item educacion fallida");
      this.router.navigate(['/skills']);
    }
  )}
}
