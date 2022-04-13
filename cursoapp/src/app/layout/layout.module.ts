import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusuperiorComponent } from './menusuperior/menusuperior.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MenusuperiorComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule //necesito importar este modulo porque dentro de este Laoyut utilizamos directivas suyas como routerLink
  ],
  exports: [
    MenusuperiorComponent //hago público el componente de este modulo para que se pueda referenciar fuera (en APPModule)
  ]
})
export class LayoutModule { }
