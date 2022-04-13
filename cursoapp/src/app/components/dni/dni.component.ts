import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnInit, AfterViewInit, OnDestroy {

  //IMPORTANTE DEFINIR SIEMPRE EL TIPO DE LAS PROPIEDADES/ATRIBUTOS/VARIABLES
  titulo:string;// = 'CALCULO LETRA DNI';
  numero:number|null;// = 0; union type 
  letra:string;// = '';
 
  //final en JAVA es como constante readonly
  //atributo de clase static
  static readonly SECUENCIA_LETRAS:string = "TRWAGMYFPDXBNJZSQVHLCKET";
 
  constructor()
  {//ESTE EL PRIMER SITIO POR DONDE PASA LA APP
    //CUANDO SE INSTANCIA EL COMPOMENETE
   // this
    console.log("Pasa por el constructor");
    //en el constructor, debo inicilizar las propiedades
    this.titulo = 'CALCULO LETRA DNI';
    this.numero = null;
    this.letra = ''; 
 
  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    console.log("Pasa por el ngOnDestroy()");
  }
  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    //este método, se invoca automáticamente, después de cargar el HTML
    //la plantilla asociada al componente
    console.log("Pasa por el ngAfterViewInit()");
  }
  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log("Pasa por el ngOnInit()");
  }
  /**
   * qué tengo en una clase
   * 
   *  ATRIBUTOS/PROPIEDADES
   *  FUNCIONES/METODOS
   */
 
 
  //CUANDO DEFINAMOS UNA FUNCIÓN O UN MÉTODO
  //PENSAMOS EN 3 COSAS
    //1 EL NOMBRE (descriptivo)
    //2 LA ENTRADA (los parámetros de entrada)
    //3 LA SALIDA
  obtenerLetra (resto:number):string
  {
    let letra_calculada:string = '';
 
      letra_calculada = DniComponent.SECUENCIA_LETRAS.charAt(resto);
 
    return letra_calculada;
  }
 
  calcularLetraDni():void
  {
    console.log("Boton calcular tocado");
    console.log("Numero dni = " + this.numero);
 
    //si esto es un numero, le meto mano
    //typeof -tipo-string
    if (typeof this.numero === "number")
    {
      let posicion = this.numero % 23;
   
      this.letra = this.obtenerLetra(posicion);
 
      console.log("Boton calcular tocado");
      console.log("Numero dni = " + this.letra);
 
      alert("Su letra es "+ this.letra);//window.alert
    }
    
  }

}
