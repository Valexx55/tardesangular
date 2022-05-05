import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdivinaNumComponent } from './components/adivina-num/adivina-num.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { DniComponent } from './components/dni/dni.component';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';
import { ImcComponent } from './components/imc/imc.component';
import { JuegoPPTComponent } from './components/juego-ppt/juego-ppt.component';
import { OciomadridComponent } from './components/ociomadrid/ociomadrid.component';
import { PerrosComponent } from './components/perros/perros.component';

const routes: Routes = [
  {path:"imc", component:ImcComponent},
  {path:"dni", component:DniComponent}, 
  {path:"adivina", component:AdivinaNumComponent},
  {path:"juegoppt", component:JuegoPPTComponent},
  {path:"perros", component:PerrosComponent},
  {path:"ocio", component:OciomadridComponent},
  {path:"alumnos", component:AlumnosComponent},
  {path:"alumnos/form", component: FormularioAlumnoComponent},//RUTA CREAR
  {path:"alumnos/form/edit/:id", component: FormularioAlumnoComponent}//RUTA EDITAR

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
