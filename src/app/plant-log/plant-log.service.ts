import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlantLogService {

    constructor(
        private http: HttpClient
    ) {}

    /**
     * Request and gets from the API the last record on the log for the given plant
     *
     * @param plantLogId The plantLog id
     * @returns {Observable<Object>}
     */
    getLastLog(plantLogId): Observable<object> {
        return this.http
            .get('https://gardening-assistant-api.appspot.com/api/plant_logs/' + plantLogId); // TODO: API url file
    }
}