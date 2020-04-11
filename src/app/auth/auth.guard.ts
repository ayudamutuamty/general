import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    CanActivate,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot,
        ):
        |
        Observable < boolean | UrlTree >
        |
        Promise < boolean | UrlTree >
        |
        boolean |
        UrlTree {

            return Observable.create((observer) => {

                this.authService.user.subscribe(user => {
                    console.log(user);

                    if (user && user.uid) {
                        observer.next(true);
                        observer.complete()
                    } else {
                        this.authService.redirectUrl = state.url;
                        this.router.navigate(['']);

                        observer.next(false);
                        observer.complete()
                    }


                })


            });
        }


}
