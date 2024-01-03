import { Component } from '@angular/core';
import { Fitness } from '../../models/fitness.interface';
import { FitnessService } from '../../services/fitness.service';
import { Router } from '@angular/router';
import { BaseResponse } from '../../server-api/response/BaseResponse';

@Component({
  selector: 'app-fitness-list-admin',
  templateUrl: './fitness-list-admin.component.html',
  styleUrl: './fitness-list-admin.component.css'
})
export class FitnessListAdminComponent {
  public data: Fitness[] = [];
  constructor(private fitnessService: FitnessService, private router: Router) { }
  ngOnInit() {
    this.fitnessService.getAllFitnesses().subscribe(response => {
      this.data = response.fitness;
    }, (err: BaseResponse) => {
      console.log(err.errorMessage);
    })
  }

  public deleteFitness(id: number) {
    if (confirm("Are you sure for deleting this fitness?")) {
      this.fitnessService.deleteFitness(id).subscribe(_ => {
        this.data = this.data.filter(fitness => fitness.id !== id);
      })
    }
  }

  public edit(id: number) {
    this.router.navigate(['/admin/fitnessDetails/edit', id.toString()])
  }

  public create() {
    this.router.navigate(['/admin/fitnessDetails/create', '0'])
  }
}
