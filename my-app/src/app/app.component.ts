import { Component } from '@angular/core';
//"ESTO ES NUESTRO JAVASCRIPT
//"PARA DARLE VIDILLA A LA PÁGINA
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'CALCULO LETRA DNI';
  numero = 30;
  /**
   * qué tengo en una clase
   * 
   *  ATRIBUTOS/PROPIEDADES
   *  FUNCIONES/METODOS
   */

  calcularLetraDni()
  {
    console.log("Boton calcular tocado");
    console.log("Numero dni = " + this.numero);
  }
}
