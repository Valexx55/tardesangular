import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DniComponent } from './components/dni/dni.component';
import { ImcComponent } from './components/imc/imc.component';
import { LayoutModule } from './layout/layout.module';
import { AdivinaNumComponent } from './components/adivina-num/adivina-num.component';
import { JuegoPPTComponent } from './components/juego-ppt/juego-ppt.component';

@NgModule({
  declarations: [ //aquí se definen los componentes del módulo
    AppComponent,
    DniComponent,
    ImcComponent,
    AdivinaNumComponent,
    JuegoPPTComponent
  ],
  imports: [ //estos los módulos referenciados 
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule //para poder usar las directivas de [(ngModel)] -  two way binding
  ],
  providers: [], //servicios
  bootstrap: [AppComponent] //componente inicial
})
export class AppModule { }
