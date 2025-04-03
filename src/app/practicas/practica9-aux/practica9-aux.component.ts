import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-practica9-aux',
  imports: [],
  templateUrl: './practica9-aux.component.html',
  styleUrl: './practica9-aux.component.css'
})
export class Practica9AuxComponent {
  @Output() addItemEvent = new EventEmitter();
  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
