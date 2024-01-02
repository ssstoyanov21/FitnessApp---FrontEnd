import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllFitnessResponse } from '../server-api/response/GetAllFitnessResponse';
import { GetFitnessDetailsResponse } from '../server-api/response/GetFitnessDetailsResponse';
import { GetAllExerciseResponse } from '../server-api/response/GetAllExercisesResponse';
import { GetExerciseResponse } from '../server-api/response/GetExerciseResponse';

@Injectable({
  providedIn: 'root'
})
export class FitnessService {

  constructor(private http: HttpClient) { }

  public getAllFitnesses(): Observable<GetAllFitnessResponse> {
    return this.http.get<GetAllFitnessResponse>("http://localhost:8000/api/fitness/all");
  }

  public getFitnessDetails(id: number): Observable<GetFitnessDetailsResponse> {
    return this.http.get<GetFitnessDetailsResponse>(`http://localhost:8000/api/fitness/details/${id}`)
  }

  public getAllExercises(): Observable<GetAllExerciseResponse> {
    return this.http.get<GetAllExerciseResponse>("http://localhost:8000/api/exercises/all");
  }

  public getExerciseDetails(id: number): Observable<GetExerciseResponse> {
    return this.http.get<GetExerciseResponse>(`http://localhost:8000/api/exercises/${id}`);
  }
}
