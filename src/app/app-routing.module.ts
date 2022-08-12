import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:'porfolio', component:PorfolioComponent},
  /**{path:'porfolio', component:PorfolioComponent, canActivate:[GuardGuard]},**/
  {path:'acercade', component:AcercadeComponent},
  {path:'educacion', component:EducacionComponent},
  {path:'experiencia', component:ExperienciaComponent},
  {path:'skills', component:SkillsComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'', redirectTo:'iniciar-sesion', pathMatch:'full'}
 /** { path: '**', component:NotFoundComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
