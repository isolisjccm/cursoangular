import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../Models/cliente.models';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  desde: number = 0;
  totalRegistros: number = 0;

  constructor(private clienteService: ClientesService,
            private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes() {

    this.clienteService.getClientes(this.desde || 0)
      .subscribe( (resp: any) => {
        this.totalRegistros = resp.total;
        this.clientes = resp.clientes;
      });
  }

  cambiarDesde(i: number) {

    const desde = this.desde + i;

    if ( desde >= this.totalRegistros ) {
      Swal.fire('Usuarios', 'No hay mas usuarios', 'info');
      return;
    }

    if ( desde < 0 ) {
      return;
    }

    this.desde += i;

    this.cargarClientes();

  }

  borrarCliente( cliente ) {

    Swal.fire({
      title: 'Estás seguro',
      text: `Vas a borrar el este cliente ${cliente.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórralo'
    }).then((result) => {
      if (result.value) {
        this.clienteService.borrarCliente(cliente._id)
        .subscribe( (resp: any) => {
            if ( resp.ok ){
              this.openSnackBar(cliente.nombre)
              this.cargarClientes();
            } else {
              Swal.fire(
                'Error!',
                `Error al borrar ${cliente.nombre}`,
                'error'
              );
            }
        });
      }
    });

  }

  openSnackBar(nombre: String) {
    this._snackBar.open("Cliente "+ nombre, "Borrado", {
      duration: 2000,
    });
  }

}
