import { Component } from '@angular/core';
import { Exercise } from '../../models/exercise.interface';
import { FitnessService } from '../../services/fitness.service';
import { BaseResponse } from '../../server-api/response/BaseResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercises-list-admin',
  templateUrl: './exercises-list-admin.component.html',
  styleUrl: './exercises-list-admin.component.css'
})
export class ExercisesListAdminComponent {
  public data: Exercise[] = [];
  constructor(private fitnessService: FitnessService, private router: Router) { }
  ngOnInit() {
    this.fitnessService.getAllExercises().subscribe(response => {
      this.data = response.exercises;
    }, (err: BaseResponse) => {
      console.log(err.errorMessage);
    })
  }

  public deleteExercises(id: number) {
    if (confirm("Are you sure for deleting this exercise?")) {
      this.fitnessService.deleteExercise(id).subscribe(_ => {
        this.data = this.data.filter(exercise => exercise.id !== id);
      })
    }
  }

  public edit(id: number) {
    this.router.navigate(['/admin/exerciseDetails/edit', id.toString()])
  }

  public create() {
    this.router.navigate(['/admin/exerciseDetails/create', '0'])
  }
}
