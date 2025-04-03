import { Component, Input } from '@angular/core';
import { PracticaService } from '../../practicas/practica.service';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() visible: boolean = true;
  
  currentUrl: string = '';
  mensaje: string = '';

  // Arreglo de descripciones para cada práctica
  descripciones: string[] = [
    'Se aprendió cómo actualizar el componente en Angular mediante la adición de propiedades y el uso de interpolación en las plantillas.',
    'Se vio cómo componer componentes en Angular, incorporando un componente dentro de otro a través del selector.',
    'Se abordó el control de flujo en las plantillas de Angular utilizando directivas como @if para mostrar u ocultar elementos basados en condiciones.',
    'Se aprendió a repetir elementos en una plantilla utilizando la directiva @for, permitiendo la iteración sobre colecciones.',
    'Se profundizó en el enlace de propiedades en Angular mediante property binding, que permite la vinculación dinámica de valores a los atributos de los elementos HTML.',
    'Se exploró la gestión de eventos en Angular, incluyendo cómo manejar eventos como el clic y el mouseover a través de la vinculación de eventos.',
    'Se trabajó con la comunicación entre componentes mediante la propiedad @Input, pasando datos de un componente padre a un componente hijo.',
    'Se estudió la comunicación de hijo a padre usando el decorador @Output y EventEmitter, para emitir eventos desde el hijo al padre.',
    'Se implementaron vistas diferibles (deferrable views) para optimizar la carga de componentes que no necesitan ser cargados inmediatamente.',
    'Se optimizaron las imágenes en Angular utilizando la directiva NgOptimizedImage para cargar imágenes de manera eficiente y mejorar el rendimiento de la aplicación.',
    'Se configuró el enrutamiento en Angular utilizando el RouterOutlet y la función provideRouter, habilitando la navegación entre diferentes vistas.',
    'Se continuó configurando rutas en la aplicación, estableciendo enlaces de navegación y utilizando RouterOutlet para que Angular Router muestre los contenidos correspondientes.',
  ];
  

  practicaSeleccionada: number = 1; // Práctica seleccionada por defecto

  constructor(
    private router: Router,
    private practicaService: PracticaService
  ) {
    // Suscribirse al servicio para detectar cambios en la práctica seleccionada
    this.practicaService.practicaActual$.subscribe((practica) => {
      this.practicaSeleccionada = practica;
    });
  }

  ngOnInit() {
    // Obtiene la URL inicial
    this.currentUrl = this.router.url;
    this.actualizarMensaje(this.currentUrl);

    // Se suscribe a los cambios de navegación
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl = event.urlAfterRedirects;
      this.actualizarMensaje(this.currentUrl);
    });
  }

  actualizarMensaje(url: string) {
    // Aquí defines las condiciones según la URL
    if(url.includes('practica1')) {
      this.mensaje = 'Estás en la Práctica 1: Introducción a la Industria 4.0.';
    } else if(url.includes('practica2')) {
      this.mensaje = 'Estás en la Práctica 2: Uso de Frameworks MVC.';
    } else if(url.includes('practica3')) {
      this.mensaje = 'Estás en la Práctica 3: Desarrollo de aplicaciones web empresariales.';
    } else {
      this.mensaje = 'Bienvenido a la aplicación';
    }
  }

  seleccionarPractica(practica: number) {
    this.practicaService.cambiarPractica(practica);
  }

  toggleDropdown(id: string) {
    const dropdown = document.getElementById(id);
    if (dropdown) {
      dropdown.classList.toggle('hidden');
    }
  }
}
