import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Marcador } from 'src/app/models/marcador';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {


  //marcador_usuario:number;
  //marcador_maquina:number;

  marcador:Marcador;

  @Input() nombrejugadormarcador!:string;
  @Output() emisorMarcador = new EventEmitter<Marcador>();
  

  constructor() { 
    //this.marcador_maquina = 0;
    //this.marcador_usuario = 0;
    this.nombrejugadormarcador='';

    this.marcador = new Marcador();
    //leerElMarcadorGuardado en localStorage
  }

  obtenerMarcador():Marcador
  {
    let marcador_aux!:Marcador;
    let marcador_cadena:string|null;

       marcador_cadena = localStorage.getItem('marcador');
       if (marcador_cadena!=null)
       {
         //DESERIALIZAR -- LO PASO DE TEXTO A OBJETO MARCADOR
          marcador_aux = JSON.parse(marcador_cadena);
       } else {
         marcador_aux = new Marcador();//0-0
       }

    return marcador_aux;
  }

  ngOnInit(): void {
    this.marcador = this.obtenerMarcador();
  }

  saluda ()
  {
    console.log('saluda ()');
  }

  actualizarMarcador (resultado:number)
  {
    console.log("Nombre jugador hijo = " + this.nombrejugadormarcador);
    if (resultado==-1)
    {
      //gana la máquina
      this.marcador.puntuacion_maquina = this.marcador.puntuacion_maquina +1;
      
    } else if (resultado==0)
    {
      this.marcador.puntuacion_maquina = this.marcador.puntuacion_maquina +1;
      this.marcador.puntuacion_jugador = this.marcador.puntuacion_jugador +1;
    }else 
    {
      //gana el usuario
      this.marcador.puntuacion_jugador = this.marcador.puntuacion_jugador +1;
     
    }
    this.emisorMarcador.emit(this.marcador);
    //Guardar el Marcador en localStorage
    //SERIALIZAR-> PASAR UN OBJETO
    //DE SU REPRERESANTACIÓN EN MEMORIA
    //A SU REREPRESTACIÓN EN STRING
    //PARA PODER ALMACERNARLO O TRANSMITIRLO
    //SERIALIZAR: PASAR DE OBJETO A TEXTO
    //DESERIALIZAR: PASAR DE TEXTO A OBJETO
    let texto_marcador:string =  JSON.stringify (this.marcador);
    console.log(`MARCADOR EN JSON = ${texto_marcador}`);
    localStorage.setItem('marcador', texto_marcador);
  }


  //TODO: GUARDAR EL RESULTADO DE LA PARTIDA
  //PARA QUE CUANDO ENTRE, ME APREZCA

  

  sumarMarcadorMaquina()
  {
    //this.marcador_maquina++;
  }

}
