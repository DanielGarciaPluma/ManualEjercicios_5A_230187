import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-practica11',
  imports: [NgOptimizedImage],
  templateUrl: './practica11.component.html',
  styleUrl: './practica11.component.css'
})
export class Practica11Component {
  logoUrl = 'http://localhost:4200/favicon.ico';
  logoAlt = 'Angular logo';
  username = 'Isaac';
}
