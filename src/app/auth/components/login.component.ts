import { Component } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { WebStorageService } from '../../shared/services/web-storage.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'login',
    templateUrl: '../views/login.component.html'
})

export class LoginComponent {

    errorMessage: string;

    constructor(
        private router: Router,
        private authService: AuthService,
        private webStorageService: WebStorageService
    ) {}

    /**
     * Handles the login form.
     *
     * @param loginForm The login form
     */
    onSubmit(loginForm): void {

        if (loginForm.valid) {
            this.login(
                loginForm.value.username,
                loginForm.value.password,
                loginForm.value.isPersistent
            );
        }
    }

    /**
     * Log the user in the application.
     * Sets all the user details in storage.
     * And redirects.
     *
     * @param {string} username The user username
     * @param {string} password The user password
     * @param {boolean} isPersistent Indicates whether the data is going to persist until is explicitly deleted, or not.
     */
    login(username: string, password: string, isPersistent: boolean): void {

        this.authService
            .getUser(username, password)
            .subscribe(
                user => {
                    this.webStorageService.setItem('user', user, isPersistent); // TODO: literals
                    this.router.navigate([this.authService.getRedirectUrl()]);
                },
                error => {
                    this.errorMessage = <string>error.error;
                }
            );
    }
}