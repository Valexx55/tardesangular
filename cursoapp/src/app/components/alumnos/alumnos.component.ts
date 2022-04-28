import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {


lista_alumnos!:Array<Alumno>;//esta es la lista visible



  constructor(public servicio_alumnos:AlumnoService) {
  } 


  ngOnInit(): void {   
    this.getAlumnosFromService();
  }



  //DRY 
  getAlumnosFromService ()
  {
   this.servicio_alumnos.leerAlumnosDeGitHub().subscribe(
    {
      complete:()=>{
        console.log("comunicaión completada");
      },
      error:(error_rx)=>{
        console.error(error_rx);
      },
      next:(listado_alumnos_rx)=>{
          listado_alumnos_rx.forEach( alumno => {console.log(alumno.id);})
          this.lista_alumnos = listado_alumnos_rx;
      }
     
    } 
   );
  }


 
  
}
