import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Usuario {
  name: string;
  lastname: string;
  favoriteFruit: string;
}

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class BasicTableComponent implements OnInit {
  items: Usuario[] = [
    { name: 'Angel de Jesus', lastname: 'Baños', favoriteFruit: 'Manzana' },
    { name: 'Citlali', lastname: 'Perez Dionicio', favoriteFruit: 'Mango' },
    { name: 'Derek', lastname: 'Sesni Carreno', favoriteFruit: 'Sandía' },
    { name: 'Al', lastname: 'Farias Leyva', favoriteFruit: 'Papaya' },
    { name: 'Michelle', lastname: 'Castro Otero', favoriteFruit: 'Uva' },
    { name: 'Adrian', lastname: 'Perez Jimenez', favoriteFruit: 'Fresa' },
    { name: 'Yazmin', lastname: 'Gutierrez', favoriteFruit: 'Plátano' },
    { name: 'Dulce Yadira', lastname: 'Salvador', favoriteFruit: 'Cereza' },
    { name: 'Mauricio', lastname: 'Gabriel', favoriteFruit: 'Naranja' },
    { name: 'Diego', lastname: 'Miguel', favoriteFruit: 'Pera' },
    { name: 'Obed', lastname: 'Flores', favoriteFruit: 'Kiwi' },
    { name: 'Jose Arturo', lastname: 'Garcia', favoriteFruit: 'Durazno' },
    { name: 'Daniel', lastname: 'Garcia Pluma', favoriteFruit: 'Melón' },
    { name: 'Brisa', lastname: 'Gregorio', favoriteFruit: 'Coco' },
    { name: 'Jesus', lastname: 'Dominguez Ramirez', favoriteFruit: 'Piña' },
    { name: 'Jonathan', lastname: 'Morales', favoriteFruit: 'Guayaba' },
    { name: 'Artiaga', lastname: 'Morales', favoriteFruit: 'Frambuesa' },
    { name: 'Uriel', lastname: 'Maldonado', favoriteFruit: 'Mandarina' },
    { name: 'Erick', lastname: 'Granillo', favoriteFruit: 'Higo' },
    { name: 'Teresa', lastname: 'Vargas', favoriteFruit: 'Moras' },
    { name: 'Jennifer', lastname: 'Bautista', favoriteFruit: 'Chabacano' },
    { name: 'Sayurd', lastname: 'Bautista', favoriteFruit: 'Granada' },
    { name: 'Paco', lastname: 'Flores', favoriteFruit: 'Toronja' },
    { name: 'Paco', lastname: ' Garcia', favoriteFruit: 'Ciruela' }
];

  filteredItems: Usuario[] = [...this.items];
  paginatedItems: Usuario[] = [];
  itemsPerPage: number = 10;
  currentPage = 1;
  totalPages = 1;

  ngOnInit() {
    this.updatePagination();
  }

  filterTable() {
    const searchInput = (document.getElementById('searchInput') as HTMLInputElement).value.toLowerCase();
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(searchInput) ||
      item.favoriteFruit.toLowerCase().includes(searchInput) ||
      item.lastname.toString().includes(searchInput)
    );
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredItems.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedItems = this.filteredItems.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  onItemsPerPageChange(event: any) {
    this.itemsPerPage = Number(event.target.value);
    this.currentPage = 1;
    this.updatePagination();
  }
}
