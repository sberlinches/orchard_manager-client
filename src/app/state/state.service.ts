import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StateService {

    constructor(
        private http: HttpClient
    ) {}

    /**
     * Request and gets from the API all the states
     *
     * @returns {Observable<Object>}
     */
    getStates(): Observable<object> {
        return this.http
            .get('https://gardening-assistant-api.appspot.com/api/states/'); // TODO: API url file
    }

    /**
     * Request and gets from the API a single state
     *
     * @param {number} id The state id
     * @returns {Observable<Object>}
     */
    getState(id: number): Observable<object> {
        return this.http
            .get('https://gardening-assistant-api.appspot.com/api/states/' + id); // TODO: API url file
    }

    /**
     * Request and gets from the API all states belonging to a country
     *
     * @param {number} countryId The country id
     * @returns {Observable<Object>}
     */
    getStatesByCountry(countryId: number): Observable<object> {
        return this.http
            .get('https://gardening-assistant-api.appspot.com/api/states/country' + countryId); // TODO: API url file
    }
}