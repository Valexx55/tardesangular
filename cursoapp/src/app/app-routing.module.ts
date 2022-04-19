import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdivinaNumComponent } from './components/adivina-num/adivina-num.component';
import { DniComponent } from './components/dni/dni.component';
import { ImcComponent } from './components/imc/imc.component';
import { JuegoPPTComponent } from './components/juego-ppt/juego-ppt.component';

const routes: Routes = [
  {path:"imc", component:ImcComponent},
  {path:"dni", component:DniComponent}, 
  {path:"adivina", component:AdivinaNumComponent},
  {path:"juegoppt", component:JuegoPPTComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
