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
     * Gets a zone and optionally its associated details
     *
     * @param {number} zoneId
     * @returns {Observable<Object>}
     */
    getZone(zoneId: number): Observable<object> {

        return this.http
            .get('http://localhost:8080/api/zone/' + zoneId) // TODO: API url file
    }

    /**
     * Gets all zones where the user is: Owner, collaborator and follower
     *
     * @param {number} userId
     * @returns {Observable<Object>}
     */
    getZonesByUser(userId: number): Observable<object> {

        return this.http
            .get('http://localhost:8080/api/zones/user/' + userId) // TODO: API url file
    }

    /**
     * Creates a new zone
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
     * Adds a variety to a zone
     *
     * @param {ZonesVarietiesSensors} zonesVarietiesSensors
     * @returns {Observable<Object>}
     */
    addVariety(zonesVarietiesSensors: ZonesVarietiesSensors): Observable<object> {
        return this.http
            .post(`http://localhost:8080/api/zone/${zonesVarietiesSensors.zoneId}/variety`, zonesVarietiesSensors); // TODO: API url file
    }

    /**
     * Removes the variety from the zone
     *
     * @param {number} zonesVarietiesSensorsId
     * @returns {Observable<Object>}
     */
    removeVariety(zonesVarietiesSensorsId: number): Observable<object> {

        return this.http
            .delete(`http://localhost:8080/api/zones/variety/${zonesVarietiesSensorsId}`) // TODO: API url file
    }

    /**
     * Adds a sensor to a variety
     *
     * @param {ZonesVarietiesSensors} zonesVarietiesSensors
     * @returns {Observable<Object>}
     */
    addSensor(zonesVarietiesSensors: ZonesVarietiesSensors): Observable<object> {
        return this.http
            .post(`http://localhost:8080/api/zone/variety/sensor/${zonesVarietiesSensors.id}`, zonesVarietiesSensors); // TODO: API url file
    }

    /**
     * Changes the sensor of a variety
     *
     * @param {ZonesVarietiesSensors} zonesVarietiesSensors
     * @returns {Observable<Object>}
     */
    changeSensor(zonesVarietiesSensors: ZonesVarietiesSensors): Observable<object> {
        return this.http
            .patch(`http://localhost:8080/api/zone/variety/sensor/${zonesVarietiesSensors.id}`, zonesVarietiesSensors); // TODO: API url file
    }

    /**
     * Removes the sensor from a variety
     *
     * @param {number} zonesVarietiesSensorsId
     * @returns {Observable<Object>}
     */
    removeSensor(zonesVarietiesSensorsId: number): Observable<object> {
        return this.http
            .delete(`http://localhost:8080/api/zone/variety/sensor/${zonesVarietiesSensorsId}`); // TODO: API url file
    }
}