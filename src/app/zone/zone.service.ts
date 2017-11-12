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
     * Adds a new zone to the user
     *
     * @param {Zone} zone
     * @returns {Observable}
     */
    newZone(zone: Zone): Observable<object> {

        return this.http
            .post('http://localhost:8080/api/zone/', zone); // TODO: API url file
    }

    /**
     * Adds a sensor to a certain zone
     *
     * @param {number} zonesVarietiesSensorsId
     * @param {Sensor} sensor
     * @returns {Observable}
     */
    addSensor(zonesVarietiesSensorsId: number, sensor: Sensor): Observable<object> {
        return this.http
            .post(`http://localhost:8080/api/zones/variety/sensor/${zonesVarietiesSensorsId}`, sensor); // TODO: API url file
    }

    /**
     * Modifies the sensor of a zone
     *
     * @param {number} zonesVarietiesSensorsId
     * @param {Sensor} sensor
     * @returns {Observable}
     */
    modifySensor(zonesVarietiesSensorsId: number, sensor: Sensor): Observable<object> {
        return this.http
            .patch(`http://localhost:8080/api/zones/variety/sensor/${zonesVarietiesSensorsId}`, sensor); // TODO: API url file
    }

    /**
     * Removes the sensor from a certain zone
     *
     * @param {number} zonesVarietiesSensorsId
     * @returns {Observable}
     */
    removeSensor(zonesVarietiesSensorsId: number): Observable<object> {
        return this.http
            .delete(`http://localhost:8080/api/zones/variety/sensor/${zonesVarietiesSensorsId}`); // TODO: API url file
    }
}