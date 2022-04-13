import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DniComponent } from './components/dni/dni.component';
import { ImcComponent } from './components/imc/imc.component';

@NgModule({
  declarations: [
    AppComponent,
    DniComponent,
    ImcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
