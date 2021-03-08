import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  titulo = "Centros educativos";
  colegio = "Colegio Infantes";
  mostrarColegio = false;

  colegios: string[] = ['Nara', 'Infantes', 'Mayol', 'Sefarad'];

  constructor() { }

  ngOnInit(): void {
  }

  mostrarOcultar(): void  {
    this.mostrarColegio = !this.mostrarColegio;
  }

}
