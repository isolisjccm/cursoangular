import { Component, OnInit } from '@angular/core';
import { TemarioService } from '../../services/temario.service';
import { Tema } from '../../interfaces/tema.interface';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.component.html',
  styleUrls: ['./temario.component.css']
})
export class TemarioComponent implements OnInit {

  temas: Tema[] = [];
  
  contadorMeGusta: number = 0;

  constructor(public temarioService: TemarioService) { }

  ngOnInit(): void {
    this.temas = this.temarioService.getTemario();
    console.log(this.temas)
  }

  eventoRecibido(miEvento: number) :void {
    this.contadorMeGusta=this.contadorMeGusta + miEvento;
  }


}
