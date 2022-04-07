export class Imc {
  peso: number;
  altura: number;
  numerico: number;
  rutaimagen: string;
  estado: string;

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
      this.estado = 'desnutrido';
      this.rutaimagen = './assets/desnutricion.jpg';
    } else if (this.numerico >= 16 && this.numerico < 18) {
      this.estado = 'delgado';
      this.rutaimagen = './assets/delgado.jpg';
    } else if (this.numerico >= 18 && this.numerico < 25) {
      this.estado = 'ideal/normal';
      this.rutaimagen = './assets/pesoideal.png';
    } else if (this.numerico > 25 && this.numerico < 31) {
      this.estado = 'sobrepeso';
      this.rutaimagen = './assets/sobrepeso.jpg';
    }  else /*(this.numerico >= 31)*/ {
      this.estado = 'obesidad';
      this.rutaimagen = './assets/obesidad.jpg';
    }
  }
}
