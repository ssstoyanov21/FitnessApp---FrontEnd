
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { FitnessService } from "../services/fitness.service";
import { Observable } from "rxjs";
import { GetFitnessDetailsResponse } from "../server-api/response/GetFitnessDetailsResponse";

@Injectable()
export class FitnessDetailsAdminResolver implements Resolve<GetFitnessDetailsResponse>{
    constructor(private fitnessService: FitnessService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GetFitnessDetailsResponse> {
        let pageMode = route.paramMap.get('mode') as string;

        if (pageMode === 'edit') {
            let id: number = +(route.paramMap.get('id') ?? 0);
            return this.fitnessService.getFitnessDetails(id);
        } else {
            // Create mode: Return an empty GetFitnessDetailsResponse or default values
            let emptyFitnessDetails: GetFitnessDetailsResponse;

            return new Observable((observer) => {
                observer.next(emptyFitnessDetails);
                observer.complete();
            });
        }
    }
}
