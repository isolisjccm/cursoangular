import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre: string = 'juAn carLOs';
  precio: number = 10320.505;
  fecha: Date = new Date("2018-03-16");

  constructor() { }

  ngOnInit(): void {
  }

}
