
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { FitnessService } from "../services/fitness.service";
import { Observable } from "rxjs";
import { GetClientResponse } from "../server-api/response/GetClientResponse";

@Injectable()
export class ClientDetailsAdminResolver implements Resolve<GetClientResponse>{
    constructor(private fitnessService: FitnessService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GetClientResponse> {
        let pageMode = route.paramMap.get('mode') as string;

        if (pageMode === 'edit') {
            let id: number = +(route.paramMap.get('id') ?? 0);
            return this.fitnessService.getClientDetails(id);
        } else {
            // Create mode: Return an empty GetClientDetailsResponse or default values
            let emptyClientDetails: GetClientResponse;

            return new Observable((observer) => {
                observer.next(emptyClientDetails);
                observer.complete();
            });
        }
    }
}
