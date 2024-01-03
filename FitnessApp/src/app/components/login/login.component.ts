import { Component } from '@angular/core';
import { LoginRequest } from '../../server-api/requests/LoginRequest';
import { FitnessService } from '../../services/fitness.service';
import { Role } from '../../enums/Role';
import { HttpErrorResponse } from '@angular/common/http';
import { BaseResponse } from '../../server-api/response/BaseResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public client: LoginRequest = {
    email: '',
    password: ''
  };
  public isHidden: boolean = true;

  constructor(private fitnessService: FitnessService, private router: Router) {

  }

  private redirectPath = (role: Role): string => {
    if (role === Role.ROLE_CLIENT) {
      return '/fitnessList'
    }
    return '/admin/clientsList'
  }

  public login() {
    if (!this.client) {
      alert("Please, fill all inputs")
      return;
    }
    if (this.client.email == "") {
      alert("Please, fill input for email");
      return;
    }
    if (this.client.password == "") {
      alert("Please, fill input for password");
      return;
    }
    this.fitnessService.login(this.client).subscribe((response) => {
      let role: Role = response.role;
      sessionStorage.setItem('role', role.toString());
      let link = this.redirectPath(response.role);
      this.router.navigate([link])
    },
      (err: HttpErrorResponse) => {
        let error = err.error as BaseResponse;
        if (error.errorMessage) {
          alert(error.errorMessage);
        }
        else {
          alert("Something went wrong! Try later")
        }
      })
  }

  public changeVisibility() {
    this.isHidden = !this.isHidden;
  }
}
