import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
 * PUT - ACTUALIZAR
 * DELETE - BORRAR
 */




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

}
