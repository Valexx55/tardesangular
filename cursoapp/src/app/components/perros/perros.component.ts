import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  
  //perro_service pasa a ser una propiedad del Componente
  //1º se ejecuta el constructor


  constructor(private perro_service: PerroService) {
    this.imagen_perro='';
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
  }

  //2º se ejecuta el ngOnInitg (después del constructor)
  ngOnInit(): void {
    this.perro_service.dameUnPerro().subscribe(
      //cuando acabes de traer el perro, me avisas aquí
      {
        complete: () => {
          console.log('LA COMUNICACIÓN HA TERMINADO');
        }, //la comunicación ha terminado! el HTTP ha llegado
        error: (error_mensaje) => {
          console.error(error_mensaje);
          alert('ERROR, INTENTELO MÁS TARDE');
        }, //ha llegado con un 500 status
        next: (perro_recibido) => {
          console.log('PERRO RECIBIDO CON ÉXITO!!!! ');
          console.log(perro_recibido.message);
          console.log(perro_recibido.status);
          this.imagen_perro=perro_recibido.message;
        }, //ha llegado y BIEN! habemus PERRO 200
      }
    );
  }

}
