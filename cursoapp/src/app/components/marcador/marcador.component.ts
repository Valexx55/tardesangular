import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { 
    //this.marcador_maquina = 0;
    //this.marcador_usuario = 0;
    this.nombrejugadormarcador='';

    this.marcador = new Marcador();
  }

  ngOnInit(): void {
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
  }


  //TODO: GUARDAR EL RESULTADO DE LA PARTIDA
  //PARA QUE CUANDO ENTRE, ME APREZCA

  

  sumarMarcadorMaquina()
  {
    //this.marcador_maquina++;
  }

}
