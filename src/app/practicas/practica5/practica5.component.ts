import { Component } from '@angular/core';

@Component({
  selector: 'app-practica5',
  imports: [],
  templateUrl: './practica5.component.html',
  styleUrl: './practica5.component.css'
})
export class Practica5Component {
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
 users = [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}];
}
