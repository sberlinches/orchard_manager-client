import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// Models
import { User } from './user';

@Injectable()
export class UserService {

    constructor(
        private http: HttpClient
    ) {}

    /**
     * Request and gets from the API all the users.
     *
     * @returns {Observable<Object>}
     */
    getUsers(): Observable<object> {
        return this.http
            .get('http://localhost:8080/api/users/'); // TODO: API url file
    }

    /**
     * Request and gets from the API all users.
     *
     * @param {User} user
     * @returns {Observable<Object>}
     */
    createUser(user: User): Observable<object> {

        return this.http
            .post(
                'http://localhost:8080/api/users/', // TODO: API url file
                user
            );
    }
}