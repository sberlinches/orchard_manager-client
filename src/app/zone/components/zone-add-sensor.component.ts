import { Component, OnInit, EventEmitter } from '@angular/core';
// Services
import { WebStorageService } from "../../shared/services/web-storage.service";
import { SensorService } from '../../sensor/sensor.service';
import { ZoneService } from '../zone.service';
// Models
import { Sensor } from '../../sensor/sensor';

@Component({
    selector: 'zone-add-sensor',
    templateUrl: '../views/zone-add-sensor.component.html'
})

export class ZoneAddSensorComponent implements OnInit {

    cancelled = new EventEmitter();
    submitted = new EventEmitter();

    zonesVarietiesSensorsId: number; // TODO: Research an elegant way to pass parameteres from the parent to the child (here)

    private user: any;
    private sensors: Sensor[];

    constructor(
        private sensorService: SensorService,
        private zoneService: ZoneService,
        private webStorageService: WebStorageService,
    ) {}

    /**
     *
     */
    ngOnInit(): void {
        this.user = this.webStorageService.getItem('user');
        this.getSensorsByUser(this.user.id);
    }

    /**
     * Gets the sensors registered by the user
     *
     * @param {number} userId
     */
    getSensorsByUser(userId: number): void {

        this.sensorService
            .getSensorsByUser(userId)
            .subscribe(
                sensors => this.sensors = sensors as Sensor[],
                error => console.error(error) // TODO: error management
            );
    }

    /**
     * Adds a sensor to a certain zone
     * // TODO: validate the modal before submit
     *
     * @param form
     */
    addSensor(form) {

        this.zoneService
            .addSensor(this.zonesVarietiesSensorsId, form.value)
            .subscribe(
                result => this.submitted.emit(),
                error => console.error(error) // TODO: error management
            );
    }

    /**
     * Triggers the parent function and destroys the modal
     */
    cancel() {
        this.cancelled.emit();
    }
}