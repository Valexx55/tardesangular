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
import { MarcadorComponent } from './components/marcador/marcador.component';
import { PerrosComponent } from './components/perros/perros.component';
import {HttpClientModule} from '@angular/common/http';
import { OciomadridComponent } from './components/ociomadrid/ociomadrid.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormularioAlumnoComponent } from './components/formulario-alumno/formulario-alumno.component';
import { MapaComponent } from './components/mapa/mapa.component';

@NgModule({
  declarations: [ //aquí se definen los componentes del módulo
    AppComponent,
    DniComponent,
    ImcComponent,
    AdivinaNumComponent,
    JuegoPPTComponent,
    MarcadorComponent,
    PerrosComponent,
    OciomadridComponent,
    AlumnosComponent,
    FormularioAlumnoComponent,
    MapaComponent
  ],
  imports: [ //estos los módulos referenciados 
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule, //para poder usar las directivas de [(ngModel)] -  two way binding
    HttpClientModule, //http 
    FontAwesomeModule, 
    BrowserAnimationsModule, //LIBRERÍA ICONOGRAFICA
    MatPaginatorModule
  ],
  providers: [], //servicios
  bootstrap: [AppComponent] //componente inicial
})
export class AppModule { }
