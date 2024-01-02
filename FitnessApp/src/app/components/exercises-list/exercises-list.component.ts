import { Component } from '@angular/core';
import { FitnessService } from '../../services/fitness.service';
import { Router } from '@angular/router';
import { Exercise } from '../../models/exercise.interface';
import { BaseResponse } from '../../server-api/response/BaseResponse';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrl: './exercises-list.component.css'
})
export class ExercisesListComponent {
  public data: Exercise[] = [];
  constructor(private fitnessService: FitnessService, private router: Router) { }
  ngOnInit() {
    this.fitnessService.getAllExercises().subscribe(response => {
      this.data = response.exercises;
    }, (err) => {
      alert(err.error.errorMessage);
    })
  }

  public detailsClick(id: number) {
    this.router.navigate(['exercise', id.toString()])
  }
}
