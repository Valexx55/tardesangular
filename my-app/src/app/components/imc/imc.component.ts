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

    /*let imc_aux:Imc;
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
    });*/

    this.mostrarPorConsola();
    let media_peso = this.obtenerMediaPeso(this.array_imcs);
    console.log(`La media del peso es ${media_peso}`);

    let media_altura = this.obtenerMediaAltura(this.array_imcs);
    console.log(`La media de la altura es ${media_altura}`);

    let maximo_numerico = this.obtenerMaxImc(this.array_imcs);
    console.log(`El IMC más alto es ${maximo_numerico}`);
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

mostrarPorConsola ():void
{
  this.array_imcs.forEach((imc_actual, i) => {
    console.log(` IMC ${i} = ${imc_actual.numerico} - ${imc_actual.estado}`);
  } );

}

//OPERADORES FUNCIONALES SOBRE ARRAYS
/**
 * forEach 
 * filter
 * map
 */

//TODO:
/**
 * Añadir estas funciones al Componente haciendo uso de 
 * operadores funcionales 
 * 
 * 1) que obtenga la media del peso de los imcs
 * 2) que obtenga la media de la estatura de los imcs
 * 3) que me de el imc más alto
 * 4) que filtre a los obesos
 * 5) que sume a todos un kg
 */


 //1) que obtenga la media del peso de los imcs

 //1 nombre
 //2 entradas
 //3 salidas
 //4 completar la definición formal del método
    //si devuelvo ALGO la primera linea, una variable/objeto del tipo devuelto
    //si devuelvo ALGO la última línea, un return de esa variable

 obtenerMediaPeso (array_caluclo: Array<Imc>):number
 {
   let media: number = 0;
   let suma: number = 0;

      array_caluclo.forEach( 
      imc_temporal => 
        { suma = suma + imc_temporal.peso; } 
      );
      media = suma / array_caluclo.length;

   return media;

 }

 //2) que obtenga la media de la estatura de los imcs
 obtenerMediaAltura (array_caluclo: Array<Imc>):number
 {
   let media_altura: number = 0;
   let sumatorio: number = 0;

    array_caluclo.forEach(imc_tem=> {sumatorio = sumatorio + imc_tem.altura;});
    media_altura = sumatorio/array_caluclo.length;

   return media_altura;
 }

 //3) que me de el imc más alto
 obtenerMaxImc(array_calculo: Array<Imc>):number
{
  let maxImc: number = 0;

    array_calculo.forEach((imc_actual) => {
      if (imc_actual.numerico > maxImc) 
      {
        maxImc = imc_actual.numerico;
      }
    });
  
    return maxImc;
}
}
