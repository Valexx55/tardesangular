import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { ImcComponent } from './components/imc/imc.component';

/**
 * aquí en este array llamado routes
 * se configuran las rutas lógicas
 * de mi app
 * 
 * y quedan asociados rutas/paths
 * a componentes
 */
const routes: Routes = [
  {path:"", component:ImcComponent},
  {path:"imc", component:ImcComponent},
  {path:"dni", component:DniComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
