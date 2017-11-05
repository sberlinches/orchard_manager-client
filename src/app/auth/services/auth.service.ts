import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    redirectUrl: string;

    constructor(
        private http: HttpClient
    ) {}

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
                'http://localhost:8080/api/auth/login',
                { username: username, password: password }
            );
    }
}