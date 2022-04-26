import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MadridService {


  private static readonly URL_API_EVENTOS_MADRID = 'https://datos.madrid.es/egob/catalogo/206974-0-agenda-eventos-culturales-100.json?distrito_nombre=';

  constructor(private httpcliente:HttpClient) { 
    
  }

  
  
  obtenerEventos(distrito:string):Observable<HttpResponse<any>>
  {
    let url_get:string = MadridService.URL_API_EVENTOS_MADRID+distrito;
    console.log(`GET A ${url_get}`);
    return this.httpcliente.get<any>(url_get, { observe: 'response' });
  }

}
