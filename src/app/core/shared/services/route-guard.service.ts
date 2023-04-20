import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core'; import { Observable } from 'rxjs'; 
import { Utils } from './utils';

@Injectable(
    { providedIn: 'root' }
)
export class RouteGuardService implements CanActivate {
    constructor(private utils:Utils,private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean  {
        const loggedUserRole=this.utils.getLocalStorageValue('loggerUserRole')
        console.log(route.data['userRole'],loggedUserRole )
        if(loggedUserRole&& loggedUserRole==route.data['userRole'] )
            return true;
            
        else{
            this.router.navigate(['online-shopping-app/main/unauthorised'])
            return false;
        }
    }

}