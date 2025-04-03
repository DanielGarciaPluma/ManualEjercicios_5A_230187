import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { Practica1Component } from './app/practicas/practica1/practica1.component';
import { Practica2Component } from './app/practicas/practica2/practica2.component';
import { Practica3Component } from './app/practicas/practica3/practica3.component';
import { Practica4Component } from './app/practicas/practica4/practica4.component';
import { Practica5Component } from './app/practicas/practica5/practica5.component';
import { Practica6Component } from './app/practicas/practica6/practica6.component';
import { Practica7Component } from './app/practicas/practica7/practica7.component';
import { Practica8Component } from './app/practicas/practica8/practica8.component';
import { Practica9Component } from './app/practicas/practica9/practica9.component';
import { Practica10Component } from './app/practicas/practica10/practica10.component';
import { Practica11Component } from './app/practicas/practica11/practica11.component';
import { Practica12Component } from './app/practicas/practica12/practica12.component';
import { Practica12HomeComponent } from './app/practicas/practica12-home/practica12-home.component';
import { Practica12UserComponent } from './app/practicas/practica12-user/practica12-user.component';
import { DatatableHomeworkComponent } from './app/tareas/datatable-homework/datatable-homework.component';
import { BasicTableComponent } from './app/tareas/basic-table/basic-table.component';
import { GraficaBasicaComponent } from './app/tareas/grafica-basica/grafica-basica.component';
import { GraficaEstatica2Component } from './app/tareas/grafica-estatica-2/grafica-estatica-2.component';
const routes: Routes = [
  { path: 'grafica-estatica-2', component: GraficaEstatica2Component },
  { path: 'basic-grafic', component: GraficaBasicaComponent },
  { path: 'basic-table', component: BasicTableComponent},
  { path: 'datatable-homework', component: DatatableHomeworkComponent},
  { path: 'practica1', component: Practica1Component},
  { path: 'practica2', component: Practica2Component},
  { path: 'practica3', component: Practica3Component},
  { path: 'practica4', component: Practica4Component},
  { path: 'practica5', component: Practica5Component},
  { path: 'practica6', component: Practica6Component},
  { path: 'practica7', component: Practica7Component},
  { path: 'practica8', component: Practica8Component},
  { path: 'practica9', component: Practica9Component},
  { path: 'practica10', component: Practica10Component},
  { path: 'practica11', component: Practica11Component},
  { path: 'practica12', component: Practica12Component,
    children:[
      {path: "home", component: Practica12HomeComponent},
      {path: "user", component: Practica12UserComponent}
    ]
  }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
