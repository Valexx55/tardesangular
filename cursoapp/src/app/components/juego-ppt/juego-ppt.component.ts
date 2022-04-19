import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MarcadorComponent } from '../marcador/marcador.component';

@Component({
  selector: 'app-juego-ppt',
  templateUrl: './juego-ppt.component.html',
  styleUrls: ['./juego-ppt.component.css']
})
export class JuegoPPTComponent implements OnInit, AfterViewInit {

  selected:boolean;
  resultado:string;
ids_botones: Array<string> = ["piedra", "papel", "tijera"];
img_botones: Array<string>  = ["rock", "paper", "scissors"];

/*
    La tabla de decision para determinar el ganador.
    Es un array bidimensional.
    Cada fila corresponde a piedra, papel y tijera, en este orden
    Cada columna corresponde al resultado de cruzar la fila correspondiente y piedra, papel y tijera en este orden
    Para acceder se necesitan dos valores, uno para la fila y otro para la columna, correspondiendo a lo seleccionado por los jugadores A y B
    0 (cero) implica un empate
    1 (uno) implica que A gana el usuario
    -1 (menos uno) implica que B gana la máquina
*/
tabla_decision : Array<Array<number>> = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0]
];

 @ViewChild('marcador') marcador_component!: MarcadorComponent

  constructor() { 
    this.selected=false;
    this.resultado='';
    //console.log('constructor');
    //this.marcador_component.saluda();
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.marcador_component.saluda();
  }

  ngOnInit(): void {
  }

  //el usuario hace su selección (jugador A) y la guardo localmente
  selectPlay (opcion:number)
  {
    
    console.log("Opcion seleccionada " + opcion);
    localStorage.setItem("selected", opcion+'');
    this.decorateSelectedPlay(opcion);
    this.selected=true;
  }

  //decoramos la selección del usuario (jugador A)
  decorateSelectedPlay(play:number) {

    let piedra = document.getElementById("piedra");
    let papel = document.getElementById("papel");
    let tijera = document.getElementById("tijera");

    if (piedra!=null && papel!=null && tijera!=null)
    {
      piedra.classList.remove("marcada");
      papel.classList.remove("marcada");
      tijera.classList.remove("marcada");
    }

    let boton = document.getElementById(this.ids_botones[play]);

    if (boton!=null)
    {
      boton.classList.add("marcada");
    }
    

}
//TODO: HACED UN MÉTODO QUE ACTUALICE DEBIDAMENTE LA
//MENSAJE DE RESULTADO SEGÚN EL RESULTADO DE LA PARTIDA

getComputerPlay():number {
  return Math.floor(Math.random() * 3);
}

muestraResultado (resultado:number):string
{
  let resultado_str:string='';

    if (resultado==-1)
    {
      //gana la máquina
      resultado_str="HAS PALMADO, LO SIENTO";
    } else if (resultado==0)
    {
      resultado_str="EMPATASTE!!";
    }else 
    {
      //gana el usuario
      resultado_str="ENHORABUENA, CHAMPION";
    }


  return resultado_str;

}

playNow()
{
  console.log("El usuario quiere jugar");

  let computer = this.getComputerPlay();//obtenemos la jugada de la máquina

  let player = localStorage.getItem("selected");//obtenemos la elección del jugador

  if (player) //si existe (y != null)
  {

  
  let result = this.tabla_decision[+player][computer];//obtengo el resultado de la partida con ambos datos

  this.resultado = this.muestraResultado(result);

  let img_computer = document.getElementById("computerPlay");

    if (img_computer) //muestro la imagen de la jugada de la máquina
    {
      img_computer.setAttribute("src", `assets/imagenesppt/${this.img_botones[computer]}.png`);
      img_computer.setAttribute("alt", this.img_botones[computer]);
    }
    

    console.log(result);

    localStorage.removeItem("selected");//borra la elección del jugador
  }
}

}
