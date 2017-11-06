import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CityService {

    constructor(
        private http: HttpClient
    ) {}

    /**
     * Request and gets from the API all the cities
     *
     * @returns {Observable<Object>}
     */
    getCities(): Observable<object> {
        return this.http
            .get('https://localhost:3443/api/cities/'); // TODO: API url file
    }

    /**
     * Request and gets from the API a single city
     *
     * @param {number} id The city id
     * @returns {Observable<Object>}
     */
    getCity(id: number): Observable<object> {
        return this.http
            .get('https://localhost:3443/api/cities/' + id); // TODO: API url file
    }

    /**
     * Request and gets from the API all cities belonging to a state
     *
     * @param {number} stateId The state id
     * @returns {Observable<Object>}
     */
    getCitiesByState(stateId: number): Observable<object> {
        return this.http
            .get('https://localhost:3443/api/cities/state' + stateId); // TODO: API url file
    }
}