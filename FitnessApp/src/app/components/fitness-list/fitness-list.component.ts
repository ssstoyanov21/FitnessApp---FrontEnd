import { Component } from '@angular/core';
import { FitnessService } from '../../services/fitness.service';
import { Fitness } from '../../models/fitness.interface';
import { BaseResponse } from '../../server-api/response/BaseResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fitness-list',
  templateUrl: './fitness-list.component.html',
  styleUrl: './fitness-list.component.css'
})
export class FitnessListComponent {
  public data: Fitness[] = [];
  constructor(private fitnessService: FitnessService, private router: Router) { }
  ngOnInit() {
    this.fitnessService.getAllFitnesses().subscribe(response => {
      this.data = response.fitness;
    }, (err: BaseResponse) => {
      console.log(err.errorMessage);
    })
  }

  public detailsClick(id: number) {
    this.router.navigate(['fitness', id.toString()])
  }
}
