import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { AuthService } from '../auth.service';
import { WebStorageService } from '../../shared/services/web-storage.service';
// Models
import { User } from '../../user/user';

@Component({
    selector: 'sign-up',
    templateUrl: '../views/sign-up.component.html'
})

export class SignUpComponent implements OnInit {

    errorMessage: string;
    user: User;

    constructor(
        private router: Router,
        private authService: AuthService,
        private webStorageService: WebStorageService
    ) {}

    ngOnInit(): void {
        this.user = new User(null, null, null);
    }

    /**
     * Handles the sign up form
     *
     * @param form The sign up form
     */
    onSubmit(form): void {

        if (form.valid) {
            this.signUp(form.value);
        }
    }

    /**
     * Inserts the user in the application
     * Sets all the user details in storage (login)
     * And redirects
     *
     * @param {User} user The user object
     */
    signUp(user: User): void {

        this.authService
            .createUser(user)
            .subscribe(
                user => {
                    this.webStorageService.setItem('user', user); // TODO: literals
                    this.router.navigate([this.authService.getRedirectUrl()]);
                },
                error => {
                    this.errorMessage = <string>error.error
                }
            );
    }
}