
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { FitnessService } from "../services/fitness.service";
import { Observable } from "rxjs";
import { GetExerciseResponse } from "../server-api/response/GetExerciseResponse";

@Injectable()
export class ExerciseDetailsAdminResolver implements Resolve<GetExerciseResponse>{
    constructor(private fitnessService: FitnessService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GetExerciseResponse> {
        let pageMode = route.paramMap.get('mode') as string;

        if (pageMode === 'edit') {
            let id: number = +(route.paramMap.get('id') ?? 0);
            return this.fitnessService.getExerciseDetails(id);
        } else {
            // Create mode: Return an empty GetFitnessDetailsResponse or default values
            let emptyFitnessDetails: GetExerciseResponse;

            return new Observable((observer) => {
                observer.next(emptyFitnessDetails);
                observer.complete();
            });
        }
    }
}
