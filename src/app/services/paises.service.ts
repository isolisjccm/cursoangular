import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_PAISES } from 'src/environments/environment';
import { Pais } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisesService {

  httpParams = new HttpParams().set('fields','flag;name;capital;population');

  constructor(private http: HttpClient) {}


  getPaises(): Observable<Pais[]> {
    const url = URL_PAISES;
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }
}