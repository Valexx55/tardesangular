export class Evento {

    id:number;
    titulo:string;
    latitud:string;
    longitud:string;
    url:string;

    constructor(id:number, titulo:string, lat:string, longi:string, url:string)
    {
        this.id = id;
        this.titulo = titulo;
        this.latitud = lat;
        this.longitud = longi;
        this.url = url;

    }
}
