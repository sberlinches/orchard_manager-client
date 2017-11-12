import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// Models
import { Zone } from './zone';
import { ZonesVarietiesSensors } from './zonesVarietiesSensors';

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
     * @returns {Observable<Object>}
     */
    newZone(zone: Zone): Observable<object> {

        return this.http
            .post('http://localhost:8080/api/zone/', zone); // TODO: API url file
    }

    /**
     * Deletes a zone and its associated details (Performed in DB side)
     *
     * @param {number} zoneId
     * @returns {Observable<Object>}
     */
    deleteZone(zoneId: number): Observable<object> {

        return this.http
            .delete(`http://localhost:8080/api/zone/${zoneId}`); // TODO: API url file
    }

    /**
     * Adds a sensor to a variety
     *
     * @param {ZonesVarietiesSensors} zonesVarietiesSensors
     * @returns {Observable<Object>}
     */
    addSensor(zonesVarietiesSensors: ZonesVarietiesSensors): Observable<object> {
        return this.http
            .post(`http://localhost:8080/api/zones/variety/sensor/${zonesVarietiesSensors.id}`, zonesVarietiesSensors); // TODO: API url file
    }

    /**
     * Modifies the sensor of a variety
     *
     * @param {ZonesVarietiesSensors} zonesVarietiesSensors
     * @returns {Observable<Object>}
     */
    modifySensor(zonesVarietiesSensors: ZonesVarietiesSensors): Observable<object> {
        return this.http
            .patch(`http://localhost:8080/api/zones/variety/sensor/${zonesVarietiesSensors.id}`, zonesVarietiesSensors); // TODO: API url file
    }

    /**
     * Removes the sensor from a variety
     *
     * @param {number} zonesVarietiesSensorsId
     * @returns {Observable<Object>}
     */
    removeSensor(zonesVarietiesSensorsId: number): Observable<object> {
        return this.http
            .delete(`http://localhost:8080/api/zones/variety/sensor/${zonesVarietiesSensorsId}`); // TODO: API url file
    }
}