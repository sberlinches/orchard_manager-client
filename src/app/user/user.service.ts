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
     * Gets all users
     *
     * @returns {Observable<Object>}
     */
    getUsers(): Observable<object> {
        return this.http
            .get('http://localhost:8080/api/users/'); // TODO: API url file
    }

    /**
     * Gets an user
     *
     * @param {number} userId
     * @returns {Observable<Object>}
     */
    getUser(userId: number): Observable<object> {
        return this.http
            .get(`http://localhost:8080/api/user/${userId}`); // TODO: API url file
    }

    /**
     * Creates a new user
     *
     * @param {User} user The user object
     * @returns {Observable<Object>}
     */
    createUser(user: User): Observable<object> {

        return this.http
            .post('http://localhost:8080/api/user/', user); // TODO: API url file
    }

    /**
     * Updates partially an user
     *
     * @param {User} user The user object
     * @returns {Observable<Object>}
     */
    updateUser(user: User): Observable<object> {

        return this.http
            .patch(`http://localhost:8080/api/user/${user.id}`, user); // TODO: API url file
    }
}