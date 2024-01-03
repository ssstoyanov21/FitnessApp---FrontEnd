import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Role } from './enums/Role';
import { FitnessService } from './services/fitness.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public service: FitnessService, private router: Router) { }
  title = 'FitnessApp';
  public role: Role = Role.ROLE_UNDEFINED;

  public isAdmin() {
    return this.service.getRole() === Role.ROLE_ADMIN;
  }

  public isClient() {
    return this.service.getRole() === Role.ROLE_CLIENT
  }

  public isLoggedIn() {
    return this.service.getRole() !== Role.ROLE_UNDEFINED;
  }

  public logOut(): void {
    sessionStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
}
