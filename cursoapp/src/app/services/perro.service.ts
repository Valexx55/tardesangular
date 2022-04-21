import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerroService {

//ESTA CLASE ES LA QUE SE COMUNICA POR HTTP CON LOS SERVIDORES
//SEVIDORES/APIS WEB/SERVICIO WEB


  //endpoint / url IP:PUERTO/SERVICIO
  static readonly API_WEB_PERROS:string = "https://dog.ceo/api/breeds/image/random";

  //http es un atributo de PerroService - INYECCIÓN DE DEPDENCIAS
  constructor(private http:HttpClient) { 

    this.http.get(PerroService.API_WEB_PERROS);

  }

  dameUnPerro ()
  {
    
  }
}
