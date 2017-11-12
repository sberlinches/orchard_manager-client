import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VarietyService {

    constructor(
        private http: HttpClient
    ) {}

    /**
     * Gets all varieties belonging to a plant
     *
     * @param {number} plantId
     * @returns {Observable<Object>}
     */
    getVarietiesByPlant(plantId: number): Observable<object> {

        return this.http
            .get(`http://localhost:8080/api/varieties/plant/${plantId}`) // TODO: API url file
    }
}