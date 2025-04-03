import { Component } from '@angular/core';
import { Practica9AuxComponent } from '../practica9-aux/practica9-aux.component';

@Component({
  selector: 'app-practica9',
  imports: [Practica9AuxComponent],
  templateUrl: './practica9.component.html',
  styleUrl: './practica9.component.css'
})
export class Practica9Component {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
