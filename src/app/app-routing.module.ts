import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NuevaeducacionComponent } from './components/educacion/nuevaeducacion.component';
import { GuardGuard } from './servicios/guard.guard';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewexperienciaComponent } from './components/experiencia/newexperiencia.component';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia.component';
import { NewproyectoComponent } from './components/proyectos/newproyecto.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto.component';
import { NewskillComponent } from './components/skills/newskill.component';  
import { EditskillComponent } from './components/skills/editskill.component';



const routes: Routes = [
  {path:'porfolio', component:PorfolioComponent},
  {path:'porfolio', component:PorfolioComponent, canActivate:[GuardGuard]},
  {path:'acercade', component:AcercadeComponent},
  {path:'educacion', component:EducacionComponent},
  {path:'experiencia', component:ExperienciaComponent},
  {path:'skills', component:SkillsComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path: 'nuevaeducacion', component:NuevaeducacionComponent},
  {path: 'editareducacion/:id', component:EditeducacionComponent},
  {path: 'newexperiencia', component:NewexperienciaComponent},
  {path: 'editexperiencia/:id', component:EditexperienciaComponent},
  {path: 'newproyecto', component:NewproyectoComponent},
  {path: 'editproyecto/:id', component:EditproyectoComponent},
  {path: 'newskill', component:NewskillComponent},
  {path:'editskill/:id', component:EditskillComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'', redirectTo:'porfolio', pathMatch:'full'},
  // { path: '**', component:NotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
