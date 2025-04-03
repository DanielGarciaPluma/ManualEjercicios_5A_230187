import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,   
    NavbarComponent,
    SidebarComponent,
    PageContentComponent,
    FooterComponent,
    BreadcrumbComponent, 
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ManualEjercicios_230187';

  sidebarVisible = true;

  onToggleSidebar(visible: boolean) {
    this.sidebarVisible = visible;
  }
  isLoggin = false;

  // Método para manejar el éxito del login
  onLoginSuccess() {
    this.isLoggin = true;
  }

  onLogout() {
    this.isLoggin = false;
  }
}
