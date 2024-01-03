import { Component } from '@angular/core';
import { Client } from '../../models/client.interface';
import { Role } from '../../enums/Role';
import { ActivatedRoute, Router } from '@angular/router';
import { FitnessService } from '../../services/fitness.service';
import { CreateClientRequest } from '../../server-api/requests/CreateClientRequest';
import { UpdateClientRequest } from '../../server-api/requests/UpdateClientRequest';

@Component({
  selector: 'app-client-details-admin',
  templateUrl: './client-details-admin.component.html',
  styleUrl: './client-details-admin.component.css'
})
export class ClientDetailsAdminComponent {
  public client: Client = {
    id: 0,
    firstName: '',
    lastName: '',
    age: 1,
    kg: 0.0,
    email: '',
    password: '',
    role: Role.ROLE_CLIENT
  };


  public mode: string = '';
  constructor(private route: ActivatedRoute, private fitnessService: FitnessService, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(({ data }) => {
      this.mode = this.route.snapshot.paramMap.get('mode') ?? 'create';

      if (this.mode === 'edit') {
        this.client = data.client;
        this.client.password = '';
      }
    });
  }
  public createClient() {
    let request: CreateClientRequest = {
      firstName: this.client.firstName,
      lastName: this.client.lastName,
      email: this.client.email,
      age: this.client.age,
      kg: this.client.kg,
      password: this.client.password

    }
    this.fitnessService.createClient(request).subscribe(_ => {
      alert("Succesfully added");
      this.router.navigate(['admin/clientsList'])
    }, (err) => {
      alert(err.error.errorMessage)
    })

  }

  public editClient() {
    let request: UpdateClientRequest = {
      firstName: this.client.firstName,
      lastName: this.client.lastName,
      email: this.client.email,
      age: this.client.age,
      kg: this.client.kg,
      password: this.client.password
    }
    this.fitnessService.editClient(this.client.id, request).subscribe(_ => {
      alert("Succesfully edited");
      this.router.navigate(['admin/clientsList'])
    }, (err) => {
      alert(err.error.errorMessage)
    })
  }
}
