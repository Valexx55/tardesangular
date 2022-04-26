import { Component, OnInit } from '@angular/core';
import { MadridService } from 'src/app/services/madrid.service';

@Component({
  selector: 'app-ociomadrid',
  templateUrl: './ociomadrid.component.html',
  styleUrls: ['./ociomadrid.component.css']
})
export class OciomadridComponent implements OnInit {

  //distritos:string[]; 
  distritos:Array<string>; 

  constructor(private madridService:MadridService) { 
    this.distritos = ['ARGANZUELA', 'BARAJAS', 'CARABANCHEL', 'CENTRO', 'CHAMARTIN', 'CHAMBERI', 'CIUDAD LINEAL', 'FUENCARRAL-EL PARDO', 
      'HORTALEZA', 'LATINA', 'MONCLOA-ARAVACA', 'MORATALAZ', 'PUENTE DE VALLECAS', 'RETIRO', 'SALAMANCA', 'SAN BLAS-CANILLEJAS', 'TETUAN', 
      'USERA', 'VICALVARO', 'VILLA DE VALLECAS', 'VILLAVERDE'];
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

    this.madridService.obtenerEventos(nombre_distrito)


  }

}
