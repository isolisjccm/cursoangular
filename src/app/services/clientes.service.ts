import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getClientes(desde = 0 ) {

    const url = URL_SERVICIOS + '/cliente?limite=5&desde=' + desde;
    return this.http.get(url);
  }

  /*getClientes(desde: number = 0) {
    const url: string = URL_SERVICIOS+"/cliente?limite=15&desde=0";
    return this.http.get(url);
  }
  */

  borrarCliente( id: string ) {
    const url = URL_SERVICIOS + '/cliente' + '/' + id;
    return this.http.delete( url );

  }

}
