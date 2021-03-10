import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/paises.interface';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit, AfterViewInit { 

  paises: Pais[] = [];
  cargando: boolean = false;
  textoCargando: string = "Cargando. Espere ...";
  constructor(private paisesService: PaisesService,
            private _snackBar: MatSnackBar) { }


  //parte angular material
  displayedColumns: string[] = ['Nombre', 'Capital', 'Poblacion', 'Bandera'];
  dataSource = new MatTableDataSource<Pais[]>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //fin angular material

  ngOnInit(): void {
    this.cargaPaises();

  }

  cargaPaises ():void{
    this.cargando = true;
    this.paisesService.getPaises().subscribe( paises => {
      this.paises = paises;
      //this.dataSource = this.paises;
      console.log (this.paises);
      this.cargando = false;
      this.openSnackBar();
    }, error => {
      this.textoCargando="error al cargar";
    });
   
  }

  openSnackBar() {
    this._snackBar.open("Paises Cargados.", "Hecho", {
      duration: 2000,
    });
  }

}
