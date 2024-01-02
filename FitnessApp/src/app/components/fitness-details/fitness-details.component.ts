import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FitnessService } from '../../services/fitness.service';
import { Fitness } from '../../models/fitness.interface';
import { Exercise } from '../../models/exercise.interface';
import { BaseResponse } from '../../server-api/response/BaseResponse';

@Component({
  selector: 'app-fitness-details',
  templateUrl: './fitness-details.component.html',
  styleUrl: './fitness-details.component.css'
})
export class FitnessDetailsComponent {
  private id: number = 0;
  public fitnessData?: Fitness;
  public exercises: Exercise[] = [];
  constructor(private route: ActivatedRoute, private fitnessService: FitnessService, private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'] || 0;
      if (this.id !== 0) {
        this.fitnessService.getFitnessDetails(this.id).subscribe(response => {
          this.fitnessData = response.fitness;
          this.exercises = response.exercises
        }, (err) => {
         alert(err.error.errorMessage);
        })
      }

    })
  }
  public exerciseDetails(id: number){
    this.router.navigate(['/exercise', id.toString()])
  }
}
