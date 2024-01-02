import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'FitnessApp';
  public username: string = '';
  private users: Array<any> = [];
  ngOnInit() {
    this.http.get<any>("http://localhost:8000/api/client/all").subscribe(response => {
      console.log(response);
      this.users = response.clients;
    })
    localStorage.setItem("role", "admin");
  }
  public isAdmin(username:string): boolean {
    let user = this.users.find(user => user.email === username);
    return user != null;
    // return localStorage.getItem("role") === "admin";
  }
}
