import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titulo: string = 'Angular';

  ngOnInit(): void {
  }
  
  dimeTituloCompleto() : string {
    let titulo: string = this.titulo;
    return `Curso de ${titulo}`;
  }
}
