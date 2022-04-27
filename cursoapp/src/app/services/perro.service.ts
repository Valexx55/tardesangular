import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PerroWeb } from '../models/perro-web';

@Injectable({
  providedIn: 'root'
})
export class PerroService {

//ESTA CLASE ES LA QUE SE COMUNICA POR HTTP CON LOS SERVIDORES
//SEVIDORES/APIS WEB/SERVICIO WEB


  //endpoint / url IP:PUERTO/SERVICIO
  static readonly API_WEB_PERROS:string = "https://dog.ceo/api/breeds/image/random";


  //http es un atributo de PerroService - INYECCIÓN DE DEPDENCIAS
  //CON LA ID LE ESTOY DICIENDO A ANGULAR:
  //ANGULAR, DAME UN OBJETO HTTPCLIENT!
  //QUE TENGA, GET, POST, PUT, DELETE, 
  constructor(private http:HttpClient) { 

    //this.http.get(PerroService.API_WEB_PERROS);

  }

  //DE ESTA MANERA NO TENGO ACCESO A PARTE DEL MENSAJE HTTP
  //NO TENGO ACCESO A LA CABECERA
  dameUnPerro ():Observable<PerroWeb>
  {
   return this.http.get<PerroWeb>(PerroService.API_WEB_PERROS);
  }

  //LA DFIERENCIA ES QUE ASÍ, OBTENGO ACCESO A LA CABECERA

  dameUnPerroConCabecera ():Observable<HttpResponse<PerroWeb>>
  {
   return this.http.get<PerroWeb>(PerroService.API_WEB_PERROS,  { observe: 'response' });
  }
  
}
