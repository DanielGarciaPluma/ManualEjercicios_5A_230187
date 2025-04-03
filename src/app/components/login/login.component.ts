import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  gridItems: number[] = Array.from({ length: 1000 }, (_, i) => i + 1);

  @Output() loginSuccess = new EventEmitter<void>();

  onLogin() {
    console.log("Login exitoso (temporalmente sin validación)");
    this.loginSuccess.emit(); 
  }
}
