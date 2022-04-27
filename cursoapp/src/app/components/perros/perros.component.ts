import { HttpResponse } from '@angular/common/http';
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
  raza_perro:string;
  
  //perro_service pasa a ser una propiedad del Componente
  //1º se ejecuta el constructor


  constructor(private perro_service: PerroService) {
    this.imagen_perro='';
    this.raza_perro= '';

    //este es el enarcagado de procesar/recibir la respuesta
    //del servidor cuando no recibo la cabecera (la forma simplificado)
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
        this.raza_perro=this.obtenerRaza();
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

    this.perro_service.dameUnPerroConCabecera().subscribe(
      //cuando acabes de traer el perro, me avisas aquí
      {
        complete: () => {
          console.log('LA COMUNICACIÓN HA TERMINADO');
        }, //la comunicación ha terminado! el HTTP ha llegado
        error: (error_mensaje:string) => {
          console.error(error_mensaje);
          alert('ERROR, INTENTELO MÁS TARDE');
        }, //ha llegado con un 500 status
        next: (httprx:HttpResponse<PerroWeb>) => {
          console.log('PERRO RECIBIDO CON ÉXITO!!!! ');
          //accedo a las cabeceras
          this.mostrarCabeceras (httprx);
          //HAGO YO EL CASTING DE FORMA EXPLÍCITA
          this.perro_recibido = <PerroWeb>httprx.body;
          this.perro_recibido = httprx.body as PerroWeb;
          this.raza_perro=this.obtenerRaza();
        }, //ha llegado y BIEN! habemus PERRO 200
      }
    );
  }

  mostrarCabeceras (http_perro: HttpResponse<PerroWeb>):void
  {
    //tipo mime
    console.log("TIPO MIME = "+ http_perro.headers.get('content-type'));
    //status
    console.log("STATUS = "+ http_perro.status);
    //status text
    console.log("STATUS TEXT = "+ http_perro.statusText);
  }

  //TODO: HACED UN PIE DE LA FOTO DEL PERRO 
  //PARA QUE SE MUESTRE LA RAZA

  obtenerRaza():string{

    let raza: string | null;

      //SOL CANDI
      raza = this.perro_recibido.message.slice(30, this.perro_recibido.message.lastIndexOf("/"));
      //SOL GEO
      //raza = this.perro_recibido.message.split("/")[4];

    return raza;
  }


}
