import { Component } from '@angular/core';
import { Client } from '../../models/client.interface';
import { FitnessService } from '../../services/fitness.service';
import { Router } from '@angular/router';
import { BaseResponse } from '../../server-api/response/BaseResponse';

@Component({
  selector: 'app-clients-list-admin',
  templateUrl: './clients-list-admin.component.html',
  styleUrl: './clients-list-admin.component.css'
})
export class ClientsListAdminComponent {
  public data: Client[] = [];
  constructor(private fitnessService: FitnessService, private router: Router) { }
  ngOnInit() {
    this.fitnessService.getAllClients().subscribe(response => {
      this.data = response.clients;
    }, (err: BaseResponse) => {
      console.log(err.errorMessage);
    })
  }

  public deleteClient(id: number) {
    if (confirm("Are you sure for deleting this exercise?")) {
      this.fitnessService.deleteClient(id).subscribe(_ => {
        this.data = this.data.filter(client => client.id !== id);
      })
    }
  }

  public edit(id: number) {
    this.router.navigate(['/admin/clientDetails/edit', id.toString()])
  }

  public create() {
    this.router.navigate(['/admin/clientDetails/create', '0'])
  }
}
