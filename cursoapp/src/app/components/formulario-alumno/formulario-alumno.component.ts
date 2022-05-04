import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent implements OnInit {

  alumno:Alumno;
  //este atributo me sirve para dos cosas
  //una: alamacenar el fichero seleccionado en caso que el usuario suba alguno
  //otra: para discernir a qué método llamo: si al POST con FOTO o al POST sin FOTO
  foto_seleccionada! : File | null;
  observador: Observer<Alumno>;

  constructor(public alumnoservicio:AlumnoService, public servicio_rutas:Router) { 

    this.alumno= new Alumno();
    this.foto_seleccionada=null;

    this.observador = {
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

  }

  ngOnInit(): void {
  }

  crearAlumnoSinFoto ()
  {
    this.alumnoservicio.crearAlumnoEnServidor(this.alumno).subscribe(this.observador);
  }

  crearAlumnoConFoto()
  {
    this.alumnoservicio.crearAlumnoEnServidorConFoto(this.alumno, this.foto_seleccionada).subscribe(this.observador);
  }
  crearAlumno()
  {
    
    //this.alumno
    //TODO: enviar el alumno
    //al servidor POST

    //SI EL ALUMNO QUE VAN A SUBIR, TRAE FOTO
    if (this.foto_seleccionada!=null)
    {
      this.crearAlumnoConFoto();
      console.log("crearAlumnoConFoto()");
    } else {
      this.crearAlumnoSinFoto();
      console.log("crearAlumnoSinFoto()");
    }
      //TENGO QUE LLAAMAR AL CREAR CON FOTO
    //SI NO, LLAMAMOS AL CREAR NORMAL
   
  }

  seleccionarFoto(evento:Event)
  {
    console.log("foto cambiada");
    //el target es el elemento que recibe el evento
    //en este caso input
    let input_file = evento.target as HTMLInputElement;
    if (input_file!=null)
    {
      if (input_file.files!=null)
      {
          this.foto_seleccionada = input_file.files[0];
          //si es una imagen, la conservo
          //si image está contenida en la descripción del tipo
          if (this.foto_seleccionada.type.indexOf('image')>=0)
          {
            console.log("El usuario ha seleccionado una imagen");
          } else 
          //si no, lo ignoramos
          {
            this.foto_seleccionada = null;
            console.log("El usuario ha seleccionado un archivo que no es una imagen");
          }

      }
        
    }


  }

}
