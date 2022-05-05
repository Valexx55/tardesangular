import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
//ESTA CLASE, SE COMUNICARÁ
//POR HTTP CON EL SERVIDOR 
//PARA OBTENER INFORMACIÓN DE ÉL

/**
 * REST
 * 
 * GET - LEER
 * POST - CREAR
 * post2 - crear con foto
 * PUT - ACTUALIZAR
 * DELETE - BORRAR
 */

  alumno_en_edicion:Alumno;

 //ME CREO UN ATRIBUTO PARA ESPECIFICAR EL TIPO MIME EN LA PETICIÓN
 //Content-Type  application/json

  //este método lo invoco desde alumnosComponent
  guardarAlumnoEnEdicion (alumno:Alumno)
  {
    this.alumno_en_edicion = alumno;
  }

  //este método se invoca desde el Formulario
  obtenerAlumnoEnEdicion ():Alumno
  {
    return this.alumno_en_edicion;
  }

  cabeceras: HttpHeaders = new HttpHeaders ({'Content-Type': 'application/json'});

  constructor(private http:HttpClient) { }


  leerAlumnosDeGitHub () :Observable<Array<Alumno>>
  { 
    return this.http.get<Array<Alumno>>("https://my-json-server.typicode.com/valexx55/alumnostardes/alumno");
    //return this.http.get<Array<Alumno>>("http://localhost:3000/alumno");
  }

  borrarAlumno (id_alumno:number): Observable<void>
  {
    //TODO: COMPLETAR LA LLAMADA
    //pongo void porque el cuerpo de la respuesta viene vacío
    return this.http.delete<void>("https://my-json-server.typicode.com/valexx55/alumnostardes/alumno"+"/"+id_alumno);

  }

  //GET http://localhost:8085/pagina?page=0&size=1

  leerAlumnosPorPaginas (page:number, size:number):Observable<any>
  {
    let parametros: HttpParams = new HttpParams().set('page', page).set('size', size);

    return this.http.get<any>("http://localhost:8085/pagina", {params : parametros});
  }

  crearAlumnoEnServidor (alumno:Alumno):Observable<Alumno>
  {
    return this.http.post<Alumno>("http://localhost:8085/",alumno, {headers:this.cabeceras});
  }


  crearAlumnoEnServidorConFoto (alumno:Alumno, archivo:File):Observable<Alumno>
  {
    let formData = new FormData();

      formData.append('nombre', alumno.nombre);
      formData.append('apellido', alumno.apellido);
      formData.append('edad', alumno.edad+'');
      formData.append('email', alumno.email);
      formData.append('archivo', archivo);

    return this.http.post<Alumno>("http://localhost:8085/crear-con-foto", formData);
  }

  actualizarAlumno (alumno:Alumno):Observable<Alumno>
  {
    return this.http.put<Alumno>("http://localhost:8085/"+alumno.id, alumno, {headers:this.cabeceras});
  }

  actualizarAlumnoConFoto (alumno:Alumno, archivo:File)
  {

    let formData = new FormData();

      formData.append('nombre', alumno.nombre);
      formData.append('apellido', alumno.apellido);
      formData.append('edad', alumno.edad+'');
      formData.append('email', alumno.email);
      formData.append('archivo', archivo);

    return this.http.put<Alumno>("http://localhost:8085/editar-con-foto/"+alumno.id, formData);

  }

}
