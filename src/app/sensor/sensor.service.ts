import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SensorService {

    constructor(
        private http: HttpClient
    ) {}

    /**
     * Request and gets from the API the sensors registered by the user
     *
     * @param {number} userId
     * @returns {Observable<Object>}
     */
    getSensorsByUser(userId: number): Observable<object> {
        return this.http
            .get('http://localhost:8080/api/sensors/user/' + userId) // TODO: API url file
    }
}