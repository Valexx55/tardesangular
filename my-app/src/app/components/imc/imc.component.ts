import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {
  titulo2 = 'Calculo IMC';
  peso:number|null;
  altura:number|null;
  imc:number;
  estado:string;
  rutaimagen:string;
  constructor() { 

    this.peso=0;
    this.altura=0;
    this.imc=0;
    this.estado="";
    this.rutaimagen="";
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

    this.imc= this.peso/Math.pow(this.altura,2);
    //FORMA UNO DE REDONDEAR - al estilo TypeScritp
    this.imc =+this.imc.toFixed(2); ////CASTING - conversión de tipos
   
    //FORMA DOS - AL ESTILO JS
    //let imcredondeado:string = this.imc.toFixed(2);
    //this.imc = parseFloat(imcredondeado);
    

    if(this.imc<16)
    {
      this.estado="desnutrido";
      this.rutaimagen="./assets/desnutricion.jpg"
    }
    else if(this.imc>=16 && this.imc<18)
    {
      this.estado="delgado";
      this.rutaimagen="./assets/delgado.jpg"
    }
    else if(this.imc>=18 && this.imc<25)
    {
      this.estado="ideal/normal";
      this.rutaimagen="./assets/pesoideal.png"
    }
    else if(this.imc>25 && this.imc<31)
    {
      this.estado="sobrepeso";
      this.rutaimagen="./assets/sobrepeso.jpg"
    }
    else if(this.imc>=31)
    {
      this.estado="obesidad";
      this.rutaimagen="./assets/obesidad.jpg"
    }

  }
   


}

}
