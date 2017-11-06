import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountryService {

    constructor(
        private http: HttpClient
    ) {}

    /**
     * Request and gets from the API all the cities
     *
     * @returns {Observable<Object>}
     */
    getCountries(): Observable<object> {
        return this.http
            .get('https://localhost:3443/api/countries/'); // TODO: API url file
    }

    /**
     * Request and gets from the API a single country
     *
     * @param {number} id The country id
     * @returns {Observable<Object>}
     */
    getCountry(id: number): Observable<object> {
        return this.http
            .get('https://localhost:3443/api/countries/' + id); // TODO: API url file
    }
}