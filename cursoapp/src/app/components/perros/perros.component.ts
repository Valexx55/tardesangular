import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { PerroWeb } from 'src/app/models/perro-web';
import { PerroService } from 'src/app/services/perro.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css'],
})
export class PerrosComponent implements OnInit, AfterViewInit {
  //ESTE COMPONENTE VA A MOSTRAR INFORMACIÓN
  //OBTENIDA DE INTERNET, Y PARA ELLO, USA UN SERVICIO

  imagen_perro:string;
  perro_recibido!: PerroWeb;
  observador_perro: Observer<PerroWeb>;
  
  //perro_service pasa a ser una propiedad del Componente
  //1º se ejecuta el constructor


  constructor(private perro_service: PerroService) {
    this.imagen_perro='';

    this.observador_perro = {
      complete: () => {
        console.log('LA COMUNICACIÓN HA TERMINADO');
      }, //la comunicación ha terminado! el HTTP ha llegado
      error: (error_mensaje:string) => {
        console.error(error_mensaje);
        alert('ERROR, INTENTELO MÁS TARDE');
      }, //ha llegado con un 500 status
      next: (perro_rx:PerroWeb) => {
        console.log('PERRO RECIBIDO CON ÉXITO!!!! ');
        console.log(perro_rx.message); //rx recibido
        console.log(perro_rx.status); //tx transmitido
        this.imagen_perro=perro_rx.message;
        this.perro_recibido = perro_rx;
      }, //ha llegado y BIEN! habemus PERRO 200
    }
    //MÉTODOS DE ACCESO A APIS WEB/COM REMOTA DESDE EL NAVEGADOR/JS
    /*
      AJAX - jAVASCRITP ASÍNCORNO-xmLhTTPrEQUEST (JS) --
      FETCH - API MÁS MODERNA "SUCESORA DE AJAX" (JS)
      OBSERVABLES - RXJS -- ANGULAR
      AXIOS ?? CARLOS- 


    */
  }
  ngAfterViewInit(): void {
    //
    console.log("ngAfterViewInit");
  }

  //2º se ejecuta el ngOnInitg (después del constructor)
  ngOnInit(): void {
    this.perro_service.dameUnPerro().subscribe(
      //cuando acabes de traer el perro, me avisas aquí
      this.observador_perro
    );
  }

  //TODO: HACED UN PIE DE LA FOTO DEL PERRO 
  //PARA QUE SE MUESTRE LA RAZA

}
