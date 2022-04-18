import { TipoImc } from "./tipo-imc";

//TODO: explicar cómo visualizar el enumerado

export class Imc {
  peso: number;
  altura: number;
  numerico: number;
  rutaimagen: string;
  estado: string;
  categoria: TipoImc;

  constructor(peso: number, altura: number) {
    this.peso = peso; //this es el objeto nuevo
    this.altura = altura;

    //this.rutaimagen = '';
    //this.estado = '';

    this.numerico = this.peso / Math.pow(this.altura, 2);
    //FORMA UNO DE REDONDEAR - al estilo TypeScritp
    this.numerico = +this.numerico.toFixed(2); ////CASTING - conversión de tipos

    //FORMA DOS - AL ESTILO JS
    //let imcredondeado:string = this.imc.toFixed(2);
    //this.imc = parseFloat(imcredondeado);

    if (this.numerico < 16) {
      this.estado =  TipoImc[TipoImc.DESNUTRIDO];//'desnutrido';
      this.rutaimagen = './assets/desnutricion.jpg';
      this.categoria = TipoImc.DESNUTRIDO;
    } else if (this.numerico >= 16 && this.numerico < 18) {
      this.estado = TipoImc[TipoImc.DELGADO];//'delgado';
      this.rutaimagen = './assets/delgado.jpg';
      this.categoria = TipoImc.DELGADO;
    } else if (this.numerico >= 18 && this.numerico < 25) {
      this.estado = TipoImc[TipoImc.IDEAL];//'ideal/normal';
      this.rutaimagen = './assets/pesoideal.png';
      this.categoria = TipoImc.IDEAL;
    } else if (this.numerico >= 25 && this.numerico < 31) {
      this.estado = TipoImc[TipoImc.SOBREPESO];//'sobrepeso';
      this.rutaimagen = './assets/sobrepeso.jpg';
      this.categoria = TipoImc.SOBREPESO;
    }  else /*(this.numerico >= 31)*/ {
      this.estado = TipoImc[TipoImc.OBESO];//'obesidad';
      this.rutaimagen = './assets/obesidad.jpg';
      this.categoria = TipoImc.OBESO;
    }
  }

  
}
