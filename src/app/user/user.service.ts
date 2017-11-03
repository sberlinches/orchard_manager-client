import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    private usersUrl = 'http://localhost:8080/api/users/';
    //const url = `${this.heroesUrl}/${id}`;

    constructor(
        private http: HttpClient
    ) {}

    getUsers(): Observable<object> {
        return this.http
            .get(this.usersUrl);
    }
}