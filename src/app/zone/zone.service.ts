import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// Models
import { Sensor } from '../sensor/sensor';
import { Zone } from './zone';

@Injectable()
export class ZoneService {

    constructor(
        private http: HttpClient
    ) {}

    /**
     * Request and gets from the API the zone and optionally its associated details
     *
     * @param {number} zoneId
     * @returns {Observable<Object>}
     */
    getZone(zoneId: number): Observable<object> {

        return this.http
            .get('http://localhost:8080/api/zones/' + zoneId) // TODO: API url file
    }

    /**
     * Request and gets from the API the zones where the user is: Owner, collaborator and follower
     *
     * @returns {Observable<Object>}
     */
    getZonesByUser(userId: number): Observable<object> {

        return this.http
            .get('http://localhost:8080/api/zones/user/' + userId) // TODO: API url file
    }

    /**
     * Sends via http the zone object to persist it in the DB
     *
     * @param {Zone} zone The zone object
     * @returns {Observable<Object>}
     */
    addZone(zone: Zone): Observable<object> {

        return this.http
            .post('http://localhost:8080/api/zones/', zone); // TODO: API url file
    }

    /**
     *
     * @param {number} zoneId The zone id
     * @param {number} varietyId The variety id
     * @param {Sensor} sensor
     * @returns {Observable<Object>}
     */
    addSensor(zoneId: number, varietyId: number, sensor: Sensor): Observable<object> {
        return this.http
            .post('http://localhost:8080/api/zones/' + zoneId + '/varieties/' + varietyId + '/sensors', sensor); // TODO: API url file
    }

    /**
     * @param {number} zoneId The zone id
     * @param {number} varietyId The variety id
     * @param {number} sensorId The sensor id
     * @returns {Observable<Object>}
     */
    removeSensor(zoneId: number, varietyId: number, sensorId: number): Observable<object> {
        return this.http
            .delete('http://localhost:8080/api/zones/' + zoneId + '/varieties/' + varietyId + '/sensors/' + sensorId); // TODO: API url file
    }
}