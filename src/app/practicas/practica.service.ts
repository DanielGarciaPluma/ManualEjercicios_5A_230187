import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PracticaService {
  private practicaSeleccionada = new BehaviorSubject<number>(1); // Valor inicial: Práctica 1
  practicaActual$ = this.practicaSeleccionada.asObservable();

  constructor(private router: Router) {
    // Suscribirse a los eventos del router para actualizar la práctica automáticamente
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      // Supongamos que tus rutas contienen "practica" seguido de un número
      const match = url.match(/practica(\d+)/);
      if (match && match[1]) {
        const practica = +match[1];
        this.cambiarPractica(practica);
      }
    });
  }

  cambiarPractica(practica: number) {
    this.practicaSeleccionada.next(practica);
  }
}
