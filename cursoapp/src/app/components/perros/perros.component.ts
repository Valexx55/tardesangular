import { Component, OnInit } from '@angular/core';
import { PerroService } from 'src/app/services/perro.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {

  //ESTE COMPONENTE VA A MOSTRAR INFORMACIÓN
  //OBTENIDA DE INTERNET, Y PARA ELLO, USA UN SERVICIO

  //perro_service pasa a ser una propiedad del Componente
  //1º se ejecuta el constructor
  constructor(private perro_service:PerroService) {

    //MÉTODOS DE ACCESO A APIS WEB/COM REMOTA DESDE EL NAVEGADOR/JS
    /*
      AJAX - jAVASCRITP ASÍNCORNO-xmLhTTPrEQUEST (JS) --
      FETCH - API MÁS MODERNA "SUCESORA DE AJAX" (JS)
      OBSERVABLES - RXJS -- ANGULAR
      AXIOS ?? CARLOS-


    */
    

   }

   
  //2º se ejecuta el ngOnInitg (después del constructor)
  ngOnInit(): void {

    this.perro_service.dameUnPerro();

  }

}
