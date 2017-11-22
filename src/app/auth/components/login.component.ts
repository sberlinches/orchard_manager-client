import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { AuthService } from '../auth.service';
import { WebStorageService } from '../../shared/services/web-storage.service';
// Models
import { User } from "../../user/user";

@Component({
    selector: 'login',
    templateUrl: '../views/login.component.html'
})

export class LoginComponent implements OnInit {

    user: User;
    errorMessage: string;

    constructor(
        private router: Router,
        private authService: AuthService,
        private webStorageService: WebStorageService
    ) {}

    ngOnInit(): void {
        this.user = new User(null, null, null); // TODO: think again about the mandatory parameters
    }

    /**
     * Handles the login form
     *
     * @param loginForm The login form
     */
    onSubmit(loginForm): void {

        if (loginForm.valid) {
            this.login(
                this.user,
                loginForm.value.isPersistent // TODO: is not working
            );
        }
    }

    /**
     * Log the user in the application
     * Sets all the user details in storage (login)
     * And redirects
     *
     * @param {User} user
     * @param {boolean} isPersistent Indicates whether the data is going to persist until is explicitly deleted, or not
     */
    login(user: User, isPersistent: boolean): void {

        this.authService
            .getUser(user)
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