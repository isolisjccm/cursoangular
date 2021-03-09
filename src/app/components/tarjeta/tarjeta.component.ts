import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TemarioService } from '../../services/temario.service';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() dato: any;
  @Input() cabecera: string = 'No tengo cabecera';
  @Input() numero: number = 0;

  @Input() mostrarImagen: boolean = true;

  @Output() eventoMeGusta: EventEmitter<number> = new EventEmitter();

  constructor(private temarioService: TemarioService) { }

  ngOnInit(): void {
  }

  meGusta() {
    //this.eventoMeGusta.emit(1);
    this.temarioService.masMeGusta();
  }

}
