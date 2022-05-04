import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent implements OnInit {

  alumno:Alumno;

  constructor(public alumnoservicio:AlumnoService, public servicio_rutas:Router) { 

    this.alumno= new Alumno();
  }

  ngOnInit(): void {
  }

  crearAlumno()
  {
    console.log("crearAlumno()");
    //this.alumno
    //TODO: enviar el alumno
    //al servidor POST
    this.alumnoservicio.crearAlumnoEnServidor(this.alumno).subscribe(
      {
        complete:()=>{
          console.log("comunicaión completada");
        },
        error:(error_rx)=>{
          console.error(error_rx);
        },
        next:(alumno_nuevo)=>{

          alert('Alumno creado correctamente con id ' +alumno_nuevo.id);
          //CUANDO VUELVA, QUE VAYA AL LISTADO AUTOMÁTICAMENTE
          //PARA PODER NAVEGAR PROGRAMÁTICAMENTE/POR CÓDIGO NO SÓLO CON ENLACE
          //ESTA EL SERVICIO/OBJETO ROUTER DE ANGULAR
          this.servicio_rutas.navigateByUrl("/alumnos");
        }

      }
    )
  }

}
