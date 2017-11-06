import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// Services
import { WebStorageService } from '../shared/services/web-storage.service';
// Models
import { User } from '../user/user';

@Injectable()
export class AuthService {

    private redirectUrl: string;

    constructor(
        private http: HttpClient,
        private webStorageService: WebStorageService
    ) {}

    /**
     * Sends via http the username and password and retrieves the user that matches
     *
     * @param {string} username
     * @param {string} password
     * @returns {Observable<Object>}
     */
    getUser(username: string, password: string): Observable<object> {

        return this.http
            .post(
                'http://localhost:8080/api/auth/login', // TODO: API url file
                { username: username, password: password }
            );
    }

    /**
     * Sends via http the user object to persist it in the DB
     *
     * @param {User} user The user object
     * @returns {Observable<Object>}
     */
    createUser(user: User): Observable<object> {

        return this.http
            .post(
                'http://localhost:8080/auth/signup/', // TODO: API url file
                user
            );
    }

    /**
     * Checks whether the user is logged or not
     *
     * @returns {boolean}
     */
    isLoggedIn(): boolean {
        return (this.webStorageService.getItem('user')); // TODO: literals
    }

    /**
     * Gets the URL to redirect after a succeed login
     * By default 'dashboard'
     *
     * @returns {string} The URL to redirect
     */
    getRedirectUrl(): string {
        return (this.redirectUrl)? this.redirectUrl: '/dashboard'; // TODO: literals
    }

    /**
     * Sets the URL to redirect after a succeed login
     * '/login' and '/logout' are not URLs to redirect
     *
     * @param {string} url The URL to redirect
     */
    setRedirectUrl(url: string): void {

        if(url !== '/login' && url !== '/logout') { // TODO: literals
            this.redirectUrl = url;
        }
    }
}