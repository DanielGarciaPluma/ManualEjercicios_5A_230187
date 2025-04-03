import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() toggleSidebarEvent = new EventEmitter<boolean>();
  sidebarVisible = true;

  homework = [
    { name: 'Tabla 1', link: 'basic-table' },
    { name: 'Tabla 2', link: 'datatable-homework' },
    { name: 'Tabla 3', link: 'tabla3' },
    { name: 'Tabla 4', link: 'tabla4' },
    { name: 'Grafica 1', link: 'basic-grafic' },
    { name: 'Grafica 2', link: 'grafica-estatica-2' },
    { name: 'Grafica 3', link: 'grafica3' },
    { name: 'Grafica 4', link: 'grafica4' },
  ];

  practices = [
    { name: 'Ejercicio 1', link: 'practica1' },
    { name: 'Ejercicio 2', link: 'practica2' },
    { name: 'Ejercicio 3', link: 'practica3' },
    { name: 'Ejercicio 4', link: 'practica4' },
    { name: 'Ejercicio 5', link: 'practica5' },
    { name: 'Ejercicio 6', link: 'practica6' },
    { name: 'Ejercicio 7', link: 'practica7' },
    { name: 'Ejercicio 8', link: 'practica8' },
    { name: 'Ejercicio 9', link: 'practica9' },
    { name: 'Ejercicio 10', link: 'practica10' },
    { name: 'Ejercicio 11', link: 'practica11' },
    { name: 'Ejercicio 12', link: 'practica12' }
  ];

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    this.toggleSidebarEvent.emit(this.sidebarVisible);
  }

  @Output() logoutEvent = new EventEmitter<void>();

  handleLogout() {
    if (confirm('¿Estás seguro de querer cerrar sesión?')) {
      this.logoutEvent.emit();
    }
  }
}
