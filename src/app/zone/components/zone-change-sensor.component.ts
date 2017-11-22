import { Component, OnInit, EventEmitter } from '@angular/core';
// Services
import { SensorService } from '../../sensor/sensor.service';
import { WebStorageService } from "../../shared/services/web-storage.service";
import { ZoneService } from '../zone.service';
// Models
import { Sensor } from '../../sensor/sensor';
import { ZonesVarietiesSensors } from "../zonesVarietiesSensors";

@Component({
    selector: 'zone-change-sensor',
    templateUrl: '../views/zone-change-sensor.component.html'
})

export class ZoneChangeSensorComponent implements OnInit {

    cancelled = new EventEmitter();
    submitted = new EventEmitter();
    zonesVarietiesSensorsId: number;
    sensorId: number;
    zonesVarietiesSensors: ZonesVarietiesSensors;
    sensors: Sensor[];

    constructor(
        private sensorService: SensorService,
        private webStorageService: WebStorageService,
        private zoneService: ZoneService
    ) {}

    ngOnInit(): void {
        this.getSensorsByUser(this.webStorageService.getItem('user').id);

        this.zonesVarietiesSensors          = new ZonesVarietiesSensors();
        this.zonesVarietiesSensors.id       = this.zonesVarietiesSensorsId;
        this.zonesVarietiesSensors.sensorId = this.sensorId;
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
     * Changes the sensor of a variety
     *
     * @param form
     */
    onSubmit(form) {

        if(form.valid) {
            this.zoneService
                .changeSensor(this.zonesVarietiesSensors)
                .subscribe(
                    result => this.submitted.emit(),
                    error => console.error(error) // TODO: error management
                );
        }
    }

    /**
     * Triggers the parent function and destroys the modal
     */
    cancel() {
        this.cancelled.emit();
    }
}