import { Component } from '@angular/core';
import { Exercise } from '../../models/exercise.interface';
import { ActivatedRoute, Params } from '@angular/router';
import { FitnessService } from '../../services/fitness.service';
import { BaseResponse } from '../../server-api/response/BaseResponse';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrl: './exercise-details.component.css'
})
export class ExerciseDetailsComponent {
  private id: number = 0;
  public exerciseData?: Exercise;
  constructor(private route: ActivatedRoute, private fitnessService: FitnessService) { }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'] || 0;
      if (this.id !== 0) {
        this.fitnessService.getExerciseDetails(this.id).subscribe(response => {
          this.exerciseData = response.exercise;
          this.exerciseData = response.exercise
        }, (err) => {
          alert(err.error.errorMessage);
        })
      }

    })
  }
}
