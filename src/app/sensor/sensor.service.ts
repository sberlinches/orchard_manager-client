import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// Models
import { Sensor } from "./sensor";

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
            .get(`http://localhost:8080/api/sensors/user/${userId}`) // TODO: API url file
    }

    /**
     * Registers the sensor to an user
     *
     * @param {Sensor} sensor
     * @returns {Observable<Object>}
     */
    registerSensor(sensor: Sensor): Observable<object> {
        return this.http
            .patch(`http://localhost:8080/api/sensors/${sensor.id}/register`, sensor) // TODO: API url file
    }

    /**
     * De-registers the sensor from the user
     *
     * @param {number} sensorId
     * @returns {Observable<Object>}
     */
    deregisterSensor(sensorId: number): Observable<object> {
        return this.http
            .delete(`http://localhost:8080/api/sensors/${sensorId}/register`) // TODO: API url file
    }
}