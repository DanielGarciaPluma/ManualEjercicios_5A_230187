import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-practica8-aux',
  imports: [],
  templateUrl: './practica8-aux.component.html',
  styleUrl: './practica8-aux.component.css'
})
export class Practica8AuxComponent {
  @Input() occupation = '';
  @Input() name = '';
}
