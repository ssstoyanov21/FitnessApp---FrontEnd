import { Component } from '@angular/core';
import { Exercise } from '../../models/exercise.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateExerciseRequest } from '../../server-api/requests/CreateExerciseRequest';
import { FitnessService } from '../../services/fitness.service';
import { UpdateExerciseRequest } from '../../server-api/requests/UpdateExerciseRequest';

@Component({
  selector: 'app-exercise-details-admin',
  templateUrl: './exercise-details-admin.component.html',
  styleUrl: './exercise-details-admin.component.css'
})
export class ExerciseDetailsAdminComponent {
  public exercise: Exercise = {
    id: 0,
    name: '',
    complexity: 1,
    description: '',
    musclePart: '',
    fitnessType: ''
  };


  public mode: string = '';
  public isExercisesAdded: boolean = false;
  public isAddedHidden: boolean = false;
  constructor(private route: ActivatedRoute, private fitnessService: FitnessService, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(({ data }) => {
      this.mode = this.route.snapshot.paramMap.get('mode') ?? 'create';

      if (this.mode === 'edit') {
        this.exercise = data.exercise;
      }

      console.log(data);
      console.log('mode', this.mode);
    });
  }
  public createExercise() {
    let request: CreateExerciseRequest = {
      name: this.exercise.name,
      description: this.exercise.description,
      musclePart: this.exercise.musclePart,
      complexity: this.exercise.complexity,
      fitnessType: this.exercise.fitnessType
    }
    this.fitnessService.createExercise(request).subscribe(_ => {
      alert("Succesfully added");
      this.router.navigate(['admin/exercisesList'])
    }, (err) => {
      alert(err.error.errorMessage)
    })

  }

  public editExercise() {
    let request: UpdateExerciseRequest = {
      name: this.exercise.name,
      description: this.exercise.description,
      musclePart: this.exercise.musclePart,
      complexity: this.exercise.complexity,
      fitnessType: this.exercise.fitnessType
    }
    this.fitnessService.editExercise(this.exercise.id, request).subscribe(_ => {
      alert("Succesfully edited");
      this.router.navigate(['admin/exercisesList'])
    }, (err) => {
      alert(err.error.errorMessage)
    })
  }
}
