import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlantService {

    constructor(
        private http: HttpClient
    ) {}

    /**
     * Gets all the plants
     *
     * @returns {Observable<Object>}
     */
    getPlants(): Observable<object> {

        return this.http
            .get('http://localhost:8080/api/plants') // TODO: API url file
    }
}