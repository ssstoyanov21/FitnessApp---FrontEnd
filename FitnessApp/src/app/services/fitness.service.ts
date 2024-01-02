import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllFitnessResponse } from '../server-api/response/GetAllFitnessResponse';
import { GetFitnessDetailsResponse } from '../server-api/response/GetFitnessDetailsResponse';
import { GetAllExerciseResponse } from '../server-api/response/GetAllExercisesResponse';
import { GetExerciseResponse } from '../server-api/response/GetExerciseResponse';
import { BaseResponse } from '../server-api/response/BaseResponse';
import { CreateFitnessRequest } from '../server-api/requests/CreateFitnessRequest';
import { UpdateFitnessRequest } from '../server-api/requests/UpdateFitnessRequest';
import { AddExerciseToFitnessRequest } from '../server-api/requests/AddExerciseToFitnessRequest';

@Injectable({
  providedIn: 'root'
})
export class FitnessService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(private http: HttpClient) { }

  public getAllFitnesses(): Observable<GetAllFitnessResponse> {
    return this.http.get<GetAllFitnessResponse>("http://localhost:8000/api/fitness/all");
  }

  public getFitnessDetails(id: number): Observable<GetFitnessDetailsResponse> {
    return this.http.get<GetFitnessDetailsResponse>(`http://localhost:8000/api/fitness/details/${id}`);
  }

  public getAllExercises(): Observable<GetAllExerciseResponse> {
    return this.http.get<GetAllExerciseResponse>("http://localhost:8000/api/exercises/all");
  }

  public getExerciseDetails(id: number): Observable<GetExerciseResponse> {
    return this.http.get<GetExerciseResponse>(`http://localhost:8000/api/exercises/${id}`);
  }

  public deleteFitness(id: number): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(`http://localhost:8000/api/fitness/delete/${id}`);
  }

  public createFitness(request: CreateFitnessRequest): Observable<BaseResponse> {
    return this.http.post<BaseResponse>('http://localhost:8000/api/fitness/create', request, this.httpOptions)
  }

  public editFitness(id: number, request: UpdateFitnessRequest): Observable<BaseResponse> {
    return this.http.put<BaseResponse>(`http://localhost:8000/api/fitness/update/${id}`, request, this.httpOptions)
  }
  
  public addExerciseToFitness(request: AddExerciseToFitnessRequest): Observable<BaseResponse> {
    return this.http.post<BaseResponse>('http://localhost:8000/api/fitness/addExercise', request, this.httpOptions)
  }
}
