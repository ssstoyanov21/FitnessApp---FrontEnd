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
import { CreateExerciseRequest } from '../server-api/requests/CreateExerciseRequest';
import { UpdateExerciseRequest } from '../server-api/requests/UpdateExerciseRequest';
import { GetAllClientsResponse } from '../server-api/response/GetAllClientsResponse';
import { GetClientResponse } from '../server-api/response/GetClientResponse';
import { CreateClientRequest } from '../server-api/requests/CreateClientRequest';
import { UpdateClientRequest } from '../server-api/requests/UpdateClientRequest';
import { Role } from '../enums/Role';
import { LoginRequest } from '../server-api/requests/LoginRequest';
import { LoginResponse } from '../server-api/response/LoginResponse';

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

  public deleteExercise(id: number): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(`http://localhost:8000/api/exercises/delete/${id}`);
  }

  public createExercise(request: CreateExerciseRequest): Observable<BaseResponse> {
    return this.http.post<BaseResponse>('http://localhost:8000/api/exercises/create', request, this.httpOptions)
  }

  public editExercise(id: number, request: UpdateExerciseRequest): Observable<BaseResponse> {
    return this.http.put<BaseResponse>(`http://localhost:8000/api/exercises/update/${id}`, request, this.httpOptions)
  }

  public getAllClients(): Observable<GetAllClientsResponse> {
    return this.http.get<GetAllClientsResponse>("http://localhost:8000/api/client/all");
  }

  public deleteClient(id: number): Observable<BaseResponse> {
    return this.http.delete<BaseResponse>(`http://localhost:8000/api/client/delete/${id}`);
  }

  public getClientDetails(id: number): Observable<GetClientResponse> {
    return this.http.get<GetClientResponse>(`http://localhost:8000/api/client/${id}`);
  }

  public createClient(request: CreateClientRequest): Observable<BaseResponse> {
    return this.http.post<BaseResponse>('http://localhost:8000/api/client/create', request, this.httpOptions)
  }

  public editClient(id: number, request: UpdateClientRequest): Observable<BaseResponse> {
    return this.http.put<BaseResponse>(`http://localhost:8000/api/client/update/${id}`, request, this.httpOptions)
  }

  public getRole(): Role {
    if (!sessionStorage.getItem('role')) {
      return Role.ROLE_UNDEFINED;
    }
    if (sessionStorage.getItem('role') === Role.ROLE_CLIENT.toString()) {
      return Role.ROLE_CLIENT;
    }
    return Role.ROLE_ADMIN;
  }

  public login(request: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://localhost:8000/api/client/login', request, this.httpOptions)
  }
}
