import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FitnessService } from '../../services/fitness.service';
import { GetFitnessDetailsResponse } from '../../server-api/response/GetFitnessDetailsResponse';
import { Fitness } from '../../models/fitness.interface';
import { CreateFitnessRequest } from '../../server-api/requests/CreateFitnessRequest';
import { UpdateFitnessRequest } from '../../server-api/requests/UpdateFitnessRequest';
import { BaseResponse } from '../../server-api/response/BaseResponse';
import { Exercise } from '../../models/exercise.interface';
import { AddExerciseToFitnessRequest } from '../../server-api/requests/AddExerciseToFitnessRequest';

@Component({
  selector: 'app-fitness-details-admin',
  templateUrl: './fitness-details-admin.component.html',
  styleUrls: ['./fitness-details-admin.component.css'] // Fix here from styleUrl to styleUrls
})
export class FitnessDetailsAdminComponent implements OnInit {
  public data: GetFitnessDetailsResponse | undefined;
  public exercises: Array<Exercise> = [];
  public exercisesTemp: Array<Exercise> = [];
  public fitness: Fitness = {
    id: 0,
    name: '',
    location: '',
    type: ''
  };

  public execisesToFitness: Exercise[] = [];
  public mode: string = '';
  public isExercisesAdded: boolean = false;
  public isAddedHidden: boolean = false;
  public newExercise: Exercise = {
    name: '',
    musclePart: '',
    id: 0,
    complexity: 0,
    description: '',
    fitnessType: ''
  }
  constructor(private route: ActivatedRoute, private fitnessService: FitnessService, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(({ data }) => {
      this.mode = this.route.snapshot.paramMap.get('mode') ?? 'create';

      if (this.mode === 'edit') {
        this.data = data as GetFitnessDetailsResponse;
        this.fitness = this.data.fitness;
        this.execisesToFitness = this.data.exercises;

      }
    });

    this.fitnessService.getAllExercises().subscribe(response => {
      this.exercises = response.exercises;
      this.exercisesTemp = [...this.exercises];
    }, (err) => {
      alert(err.error?.errorMessage);
    })
  }
  public createFitness(isNavigate:boolean = true) {
    let request: CreateFitnessRequest = {
      name: this.fitness.name,
      location: this.fitness.location,
      type: this.fitness.type
    }
    this.fitnessService.createFitness(request).subscribe(_ => {
      alert("Succesfully added");
      if(isNavigate){
        this.router.navigate(['admin/fitnessList'])
      }
    }, (err) => {
      alert(err.error.errorMessage)
    })

  }

  public editFitness() {
    let request: UpdateFitnessRequest = {
      name: this.fitness.name,
      location: this.fitness.location,
      type: this.fitness.type
    }
    this.fitnessService.editFitness(this.fitness.id, request).subscribe(_ => {
      alert("Succesfully edited");
      this.router.navigate(['admin/fitnessList'])
    }, (err) => {
      alert(err.error.errorMessage)
    })
  }

  public exerciseDetails(id: number) {
    this.router.navigate(['/exercise', id.toString()])
  }

  public changeNewExercise(id: string) {
    let exercise = this.exercises.find(exercise => exercise.id === +id);
    if (!exercise) {
      return;
    }
    this.newExercise = {
      id: exercise.id,
      name: exercise.name,
      description: exercise.description,
      musclePart: exercise.musclePart,
      fitnessType: exercise.fitnessType,
      complexity: exercise.complexity
    };
    this.isAddedHidden = false;
  }

  public clearNew() {
    this.newExercise = {
      name: '',
      musclePart: '',
      id: 0,
      complexity: 0,
      description: '',
      fitnessType: ''
    }
  }
  public addExercise(): void {
    if (this.newExercise.id === 0) {
      return;
    }
    let request: AddExerciseToFitnessRequest = {
      exerciseId: this.newExercise.id,
      fitnessId: this.fitness.id
    }
    this.fitnessService.addExerciseToFitness(request).subscribe(_ => {
      let data: Exercise = {
        id: this.newExercise.id,
        name: this.newExercise.name,
        description: this.newExercise.description,
        musclePart: this.newExercise.musclePart,
        fitnessType: this.newExercise.fitnessType,
        complexity: this.newExercise.complexity,
      }
      this.execisesToFitness = [...this.execisesToFitness, data]
      this.clearNew();
    }, (err) => { alert(err.error.errorMessage) })
  }

  public isAdded(){
     if(this.fitness.id === 0){
      alert("Create fitness before")
      return;
    }
    this.isExercisesAdded = true;
  }
  public showSelect() {
    this.isAddedHidden = true
    if (this.data) {
       this.exercises = [...this.exercisesTemp];
    }
  }
}