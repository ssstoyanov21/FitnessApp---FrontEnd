
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Role } from "../enums/Role";

@Injectable()
export class LoginResolver implements Resolve<boolean>{
    constructor(private router: Router) { }

    private redirectPath = (): string => {
        if (!sessionStorage.getItem('role')) {
            return '/login';
        }
        if (sessionStorage.getItem('role') === Role.ROLE_CLIENT.toString()) {
            return '/fitnessList'
        }
        return '/admin/clientsList'
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let link = this.redirectPath();
        if (link !== "/login") {
            this.router.navigate([link])
            return true;
        }
        return true;
    }
}
