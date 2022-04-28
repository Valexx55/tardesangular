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
 * GET - LEER
 * POST - CREAR
 * PUT - ACTUALIZAR
 * DELETE - BORRAR
 */




  constructor(private http:HttpClient) { }


  leerAlumnosDeGitHub () :Observable<Array<Alumno>>
  { 
    return this.http.get<Array<Alumno>>("");
  }

}
