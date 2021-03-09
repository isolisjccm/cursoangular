import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { TEMARIO } from '../data/datostemario.json';

@Injectable({
  providedIn: 'root'
})
export class TemarioService {

  contadorMeGustaSrv: number = 0;

  constructor() {
    console.log('Iniciando el servicio Temario');
  }


  //devuelve los temas
  getTemario(){
    return TEMARIO;
  }

  //Aumentamos el meGusta
  masMeGusta():void{
    this.contadorMeGustaSrv++;
  }

}
