import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { DecimalPipe } from '@angular/common';

export interface Country {
  pais: string;
  bandera: string;
  poblacion: number;
}

// Array con 30 ejemplos de países del continente americano
const DATA: Country[] = [
  { pais: 'Estados Unidos', bandera: 'https://flagcdn.com/w320/us.png', poblacion: 331000000 },
  { pais: 'Brasil', bandera: 'https://flagcdn.com/w320/br.png', poblacion: 212000000 },
  { pais: 'México', bandera: 'https://flagcdn.com/w320/mx.png', poblacion: 128000000 },
  { pais: 'Colombia', bandera: 'https://flagcdn.com/w320/co.png', poblacion: 50000000 },
  { pais: 'Argentina', bandera: 'https://flagcdn.com/w320/ar.png', poblacion: 45000000 },
  { pais: 'Perú', bandera: 'https://flagcdn.com/w320/pe.png', poblacion: 33000000 },
  { pais: 'Venezuela', bandera: 'https://flagcdn.com/w320/ve.png', poblacion: 28000000 },
  { pais: 'Chile', bandera: 'https://flagcdn.com/w320/cl.png', poblacion: 19000000 },
  { pais: 'Guatemala', bandera: 'https://flagcdn.com/w320/gt.png', poblacion: 17000000 },
  { pais: 'Ecuador', bandera: 'https://flagcdn.com/w320/ec.png', poblacion: 17000000 },
  { pais: 'Bolivia', bandera: 'https://flagcdn.com/w320/bo.png', poblacion: 11500000 },
  { pais: 'Haití', bandera: 'https://flagcdn.com/w320/ht.png', poblacion: 11000000 },
  { pais: 'República Dominicana', bandera: 'https://flagcdn.com/w320/do.png', poblacion: 10800000 },
  { pais: 'Honduras', bandera: 'https://flagcdn.com/w320/hn.png', poblacion: 10000000 },
  { pais: 'El Salvador', bandera: 'https://flagcdn.com/w320/sv.png', poblacion: 6500000 },
  { pais: 'Nicaragua', bandera: 'https://flagcdn.com/w320/ni.png', poblacion: 6500000 },
  { pais: 'Costa Rica', bandera: 'https://flagcdn.com/w320/cr.png', poblacion: 5000000 },
  { pais: 'Panamá', bandera: 'https://flagcdn.com/w320/pa.png', poblacion: 4300000 },
  { pais: 'Jamaica', bandera: 'https://flagcdn.com/w320/jm.png', poblacion: 2900000 },
  { pais: 'Puerto Rico', bandera: 'https://flagcdn.com/w320/pr.png', poblacion: 3200000 },
  { pais: 'Uruguay', bandera: 'https://flagcdn.com/w320/uy.png', poblacion: 3500000 },
  { pais: 'Paraguay', bandera: 'https://flagcdn.com/w320/py.png', poblacion: 7000000 },
  { pais: 'Guyana', bandera: 'https://flagcdn.com/w320/gy.png', poblacion: 800000 },
  { pais: 'Suriname', bandera: 'https://flagcdn.com/w320/sr.png', poblacion: 600000 },
  { pais: 'Canadá', bandera: 'https://flagcdn.com/w320/ca.png', poblacion: 38000000 },
  { pais: 'Belice', bandera: 'https://flagcdn.com/w320/bz.png', poblacion: 400000 },
  { pais: 'Bahamas', bandera: 'https://flagcdn.com/w320/bs.png', poblacion: 400000 },
  { pais: 'Barbados', bandera: 'https://flagcdn.com/w320/bb.png', poblacion: 287000 },
  { pais: 'Trinidad y Tobago', bandera: 'https://flagcdn.com/w320/tt.png', poblacion: 1400000 },
];



// Ordenar inicialmente los datos por población en forma descendente
DATA.sort((a, b) => b.poblacion - a.poblacion);

@Component({
  selector: 'app-datatable-homework',
  templateUrl: './datatable-homework.component.html',
  styleUrls: ['./datatable-homework.component.css'],
  standalone: true,
  imports: [MatTableModule, MatSortModule, DecimalPipe]
})
export class DatatableHomeworkComponent implements AfterViewInit {
  displayedColumns: string[] = ['pais', 'bandera', 'poblacion'];
  dataSource = new MatTableDataSource(DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
