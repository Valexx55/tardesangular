import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {


  marcador_usuario:number;
  marcador_maquina:number;

  constructor() { 
    this.marcador_maquina = 0;
    this.marcador_usuario = 0;
  }

  ngOnInit(): void {
  }

  saluda ()
  {
    console.log('saluda ()');
  }

  actualizarMarcador (resultado:number)
  {
    if (resultado==-1)
    {
      //gana la máquina
      this.marcador_maquina = this.marcador_maquina +1;
      
    } else if (resultado==0)
    {
      this.marcador_maquina = this.marcador_maquina +1;
      this.marcador_usuario = this.marcador_usuario +1;
    }else 
    {
      //gana el usuario
      this.marcador_usuario = this.marcador_usuario +1;
     
    }
  }

  sumarMarcadorMaquina()
  {
    this.marcador_maquina++;
  }

}
