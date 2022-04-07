import { Component, OnInit } from '@angular/core';
import { Imc } from 'src/app/models/imc';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {
  titulo2 = 'Calculo IMC';
  peso:number|null;
  altura:number|null;
  oimc:Imc|null;

  array_imcs!:Array<Imc>;//aquí quiero ir guardando todos los imcs que vaya calculando
  
  //INVERSIÓN DE CONTROL IOC --yo no hago el new de ImcComponent lo hace Angular por mí
  constructor() { 

    this.peso=0;
    this.altura=0;
    this.oimc=null;
    this.array_imcs = new Array<Imc>();//inicializo

   
  }

  ngOnInit(): void {
  }
/*calculo IMC = Peso (kg) / altura (m)2

Ejemp​lo:
Altura: 165 cm (1,65 m).

Peso: 68 kg

Cálculo: 68 ÷ 1,652 (2,7225) = 24,98*/

calcularImc():void{


  if(typeof this.peso==="number"&& typeof this.altura==="number"){

    this.oimc = new Imc(this.peso, this.altura);//llamamos al cosntructor
    this.array_imcs.push(this.oimc);

    let imc_aux:Imc;
    for (let i=0; i<this.array_imcs.length;i++)
    { 
      imc_aux = this.array_imcs[i];
      console.log("imc actual for tradicional = " + imc_aux.altura + " " + imc_aux.peso + " "+ + imc_aux.numerico) ;
    }

    this.array_imcs.forEach(imc_actual => {
      console.log("imc actual foreach = " + imc_actual.altura + " " + imc_actual.peso + " "+ + imc_actual.numerico) ;
    } );

    this.array_imcs.forEach(function mostar(imc_actual) {
      console.log("imc actual foreachcon funcion = " + imc_actual.altura + " " + imc_actual.peso + " "+ + imc_actual.numerico) ;
    });

  }
   
  //TODO: hacer un botón en la página
  //para que cuando se toque, se eliminen
  //todos los registros de la tabla

  //EXTRA: borrar también el registro individual


}

borrarListaImcs()
{
  this.array_imcs.length=0;//es una forma de vacíar el array
}

}
