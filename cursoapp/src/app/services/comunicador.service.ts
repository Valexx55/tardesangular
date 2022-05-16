import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class ComunicadorService {

  private eventoNuevoCom = new Subject<Evento>();

  //tuberia
  nuevoEventoAnunciado = this.eventoNuevoCom.asObservable();//"como a la escucha del evento"

  constructor() { }

  //función invocada por el ociomadrid
  comunicaNuevoEventoSeleccionado (evento:Evento)
  {
    this.eventoNuevoCom.next(evento);
  }
}
