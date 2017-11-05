import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// Services
import { WebStorageService } from '../../shared/services/web-storage.service';

@Injectable()
export class AuthService {

    private redirectUrl: string;

    constructor(
        private http: HttpClient,
        private webStorageService: WebStorageService
    ) {}

    /**
     * Checks whether the user is logged or not
     *
     * @returns {boolean}
     */
    isLoggedIn(): boolean {
        return (this.webStorageService.getItem('user')); // TODO: literals
    }

    /**
     * Sends via http the username and password and retrieves the user that matches.
     *
     * @param {string} username
     * @param {string} password
     * @returns {Observable<Object>}
     */
    getUser(username: string, password: string): Observable<object> {

        return this.http
            .post(
                'http://localhost:8080/api/auth/login', // TODO: literals
                { username: username, password: password }
            );
    }

    /**
     * Gets the URL to redirect after a succeed login.
     * By default 'dashboard'
     *
     * @returns {string} The URL to redirect to
     */
    getRedirectUrl(): string {
        return (this.redirectUrl)? this.redirectUrl: '/dashboard'; // TODO: literals
    }

    /**
     * Sets the URL to redirect after a succeed login.
     *
     * @param {string} url The URL to redirect to
     */
    setRedirectUrl(url: string): void {
        this.redirectUrl = url;
    }
}