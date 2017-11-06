import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// Services
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class isAuthenticated implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    /**
     * Checks to see if a user can visit a route.
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {boolean}
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if(this.authService.isLoggedIn()) {
            return true;
        } else {
            this.authService.setRedirectUrl(state.url);
            this.router.navigate(['/login']); // TODO: literals
            return false;
        }
    }
}