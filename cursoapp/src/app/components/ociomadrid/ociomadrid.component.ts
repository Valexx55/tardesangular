import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { MadridService } from 'src/app/services/madrid.service';

@Component({
  selector: 'app-ociomadrid',
  templateUrl: './ociomadrid.component.html',
  styleUrls: ['./ociomadrid.component.css']
})
export class OciomadridComponent implements OnInit {

  //distritos:string[]; 
  distritos:Array<string>;
  array_titulo_eventos!:Array<string>;//aquí quiero guardar todos los títulos que recupere del distrito
  array_eventos!:Array<Evento>;//aquí quiero guardar todos los títulos que recupere del distrito
  numero_eventos:number;

  constructor(private madridService:MadridService) { 
    this.distritos = ['ARGANZUELA', 'BARAJAS', 'CARABANCHEL', 'CENTRO', 'CHAMARTIN', 'CHAMBERI', 'CIUDAD LINEAL', 'FUENCARRAL-EL PARDO', 
      'HORTALEZA', 'LATINA', 'MONCLOA-ARAVACA', 'MORATALAZ', 'PUENTE DE VALLECAS', 'RETIRO', 'SALAMANCA', 'SAN BLAS-CANILLEJAS', 'TETUAN', 
      'USERA', 'VICALVARO', 'VILLA DE VALLECAS', 'VILLAVERDE'];

      this.array_titulo_eventos = new Array<string>();//inicializo
      this.array_eventos = new Array<Evento>();//inicializo[];
      this.numero_eventos = 0;
  }

  ngOnInit(): void {
    console.log(`hay ${this.distritos.length} en Madrid`);
  }

  distritoSeleccionado (evento:Event)
  {
    //target es el elemento donde ha sucedido el evento
    //el evento es cambiar el selector, su target es el select
    let elementoSelect: HTMLSelectElement = <HTMLSelectElement> evento.target;

    let nombre_distrito: string = elementoSelect.value;

    console.log(`nombre distrito = ${nombre_distrito}`);

    //TODO: PEDIR LAS ACTIVIDADES DEL DISTRITO SELECCIONADO
    //1. CREAR UN SERVICIO PARA QUE SE COMUNIQUE VIA HTTP CON EL API DEL AYUNTA
    //2. DEFINIR UN MÉTODO EN ESE SERVICIO QUE DEVUELVA UN OBSERVABLE get
    //3. INYECTAR ESE SERVICIO PARA PODER SER USADO EN EL COMPONENTE
    //4. LLAMAR AL MÉTODO QUE DEVUELVE EL OBSERVABLE Y SUSCRIBIRME
    //5. DEFINIR UN OBSERVADOR/OBSERVER, PARA RECEPCIONAR EL MENSAJE

    this.madridService.obtenerEventos(nombre_distrito).subscribe
    (
      {
        complete: () => {console.log("comunicación completada");},
        error: (mensaje_error) => { 
          
          console.error(`ERROR ${mensaje_error.status} ${mensaje_error.message}` );
          alert("IMPOSIBLE CONECTAR EL SERVIDOR");
        },
        next: (respuesta) => 
        {
          console.log(`CUERPO = ${respuesta}`);
          let eventos:any = respuesta.body;
          this.array_titulo_eventos.length=0;
          this.array_eventos.length=0;
          let evento_aux:Evento;
          let numero:number = 0;
          eventos ['@graph'].forEach (
            (evento:any) =>  {
              //COMPLETAR PARA MOSTRAR EN LA PLANTILLA
              // Guardo los títulos en un array y en la plantilla
              // los muestro en una tabla con *ngFor
              numero= numero+1;
              evento_aux = new Evento(numero,evento.title, evento.location.latitude, evento.location.longitude, evento['@id']);
              this.array_eventos.push(evento_aux);
              
              this.array_titulo_eventos.push(evento.title);
              console.log(evento.title);
            }
          )
          // Decir el número de eventos
          this.numero_eventos = this.array_titulo_eventos.length;
          console.log(this.numero_eventos);
        }
      }
    );

  }

  verEnElMapa (id_tocado:number)
  {
    console.log("ID TOCADO = " + id_tocado);
    //OBTENGO LA LAT / LONG
    console.log(`LAT ${this.array_eventos[id_tocado-1].latitud} LONG ${this.array_eventos[id_tocado-1].longitud}`);
    //TODO: mostrar en un mapa el punto geográfico
  }

  verElDetalle (evento_tocado: Evento)
  {
    console.log("evento_tocado = " + evento_tocado.url);
    //TODO: mostrar el detalle consultando la url en otra ventana (emergente?)
  }

  //MEJORAS SOBRE EL CÓDIGO DE CANDI


}
