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
            .get('https://gardening-assistant-api.appspot.com/api/users/'); // TODO: API url file
    }

    /**
     * Gets an user
     *
     * @param {number} userId
     * @returns {Observable<Object>}
     */
    getUser(userId: number): Observable<object> {
        return this.http
            .get(`https://gardening-assistant-api.appspot.com/api/user/${userId}`); // TODO: API url file
    }

    /**
     * Creates a new user
     *
     * @param {User} user The user object
     * @returns {Observable<Object>}
     */
    createUser(user: User): Observable<object> {

        return this.http
            .post('https://gardening-assistant-api.appspot.com/api/user/', user); // TODO: API url file
    }

    /**
     * Updates partially an user
     *
     * @param {User} user The user object
     * @returns {Observable<Object>}
     */
    updateUser(user: User): Observable<object> {

        return this.http
            .patch(`https://gardening-assistant-api.appspot.com/api/user/${user.id}`, user); // TODO: API url file
    }
}