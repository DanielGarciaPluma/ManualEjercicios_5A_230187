import { Component } from '@angular/core';

@Component({
  selector: 'app-practica7',
  imports: [],
  templateUrl: './practica7.component.html',
  styleUrl: './practica7.component.css'
})
export class Practica7Component {
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
  
  greet() {
    console.log('Hello, there 👋');
  }

}
