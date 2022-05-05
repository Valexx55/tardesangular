import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
//POR CADA ICONO, UN IMPORT
import { faCoffee, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit, AfterViewInit {


  //el atributo paginador es el elemento <mat-paginator></mat-paginator>
  @ViewChild(MatPaginator) paginador!:MatPaginator;

  lista_alumnos!:Array<Alumno>;//esta es la lista visible

  iconoCafe :IconDefinition = faCoffee;
  iconoborrar: IconDefinition = faTrashAlt;
  iconoeditar: IconDefinition = faEdit;

  totalRegistros:number=0;
  totalPorPagina:number=2;
  opcionesPagina: number[] = [2, 4, 6, 8];
  paginaActual:number = 0;

  constructor(public servicio_alumnos:AlumnoService, private servicio_rutas:Router) {
  } 
  ngAfterViewInit(): void {
   console.log("Aquí se ha cargado la plantilla -existe this.paginador-");
   //PERSONALIZAR EL paginador- lo ponemos en español
   this.paginador._intl.itemsPerPageLabel="Registros por página";
   this.paginador._intl.nextPageLabel="Siguiente";
   this.paginador._intl.previousPageLabel="Anterior";
   this.paginador._intl.firstPageLabel="Primera página";
   this.paginador._intl.lastPageLabel="Última página";
   //falta traducir el OF! 
  }


  ngOnInit(): void {   
    //this.getAlumnosFromService(); //obtener todos
    this.getAlumnosPagFromService();//obtengo los alumnos paginados
  }

  paginar (evento:PageEvent)
  {
    console.log(`evento.pageIndex ${evento.pageIndex}`);
    console.log(`evento.pageSize ${evento.pageSize}`);

    this.totalPorPagina = evento.pageSize;
    this.paginaActual = evento.pageIndex;
    
   
    this.getAlumnosPagFromService();

  }

  getAlumnosPagFromService () //TRAE LA PÁGINA
  {
      this.servicio_alumnos.leerAlumnosPorPaginas(this.paginaActual, this.totalPorPagina).subscribe
      (
        {
          complete:()=>{
            console.log("comunicaión completada");
          },
          error:(error_rx)=>{
            console.error(error_rx);
          },
          next:(respuesta)=>{

             this.lista_alumnos = respuesta.content as Alumno[];//casting
             this.totalRegistros = respuesta.totalElements;
          }

        }

      );

  }



  //DRY 
  getAlumnosFromService () //TRAE TODOS
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


  borrarAlumno(id_alumno:number)
  {
    console.log("Borrando al alumno id "+ id_alumno );
   
    
    if (confirm(`¿Deseas eliminar al alumno ${id_alumno}?`))//si confirm == true
    {
      this.servicio_alumnos.borrarAlumno(id_alumno).subscribe
      (
        {
          complete: () => {console.log("Operación borrar completada");},
          error: (err) => {
            console.error(err);
          },
          //next() vacío porque el cuerpo de la respuesta es vacío void
          next: () =>
          {
            console.log("Operación borrar completada CON ÉXITO!!");
            //eliminar el registro borrado de la página
            //opcion1 --recargar la página contra:más cosotoso
            //opcion2 --eliminar de lista lista_alumnos ese id
            //filter - para que la lista de alumnos tenga todos menos el id elminado
            this.lista_alumnos = this.lista_alumnos.filter(alumno_aux => alumno_aux.id!=id_alumno);
          }
        }
      )
    } else {
      console.log(`Operación borrado cancelada por el usuario`);
    }
  }

  editarAlumno (alumno_editar:Alumno)
  {
    console.log("Mod al alumno id "+ alumno_editar.id );
    //1 guardo en el servicio el alumno en edicion
    this.servicio_alumnos.guardarAlumnoEnEdicion(alumno_editar);
    //2 navegar al formulario
    this.servicio_rutas.navigate(["/alumnos/form/edit", alumno_editar.id]);

  }
  
}
