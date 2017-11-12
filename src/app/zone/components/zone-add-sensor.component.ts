import { Component, OnInit, EventEmitter } from '@angular/core';
// Services
import { WebStorageService } from "../../shared/services/web-storage.service";
import { SensorService } from '../../sensor/sensor.service';
import { ZoneService } from '../zone.service';
// Models
import { Sensor } from '../../sensor/sensor';
import { ZonesVarietiesSensors } from "../zonesVarietiesSensors";

@Component({
    selector: 'zone-add-sensor',
    templateUrl: '../views/zone-add-sensor.component.html'
})

export class ZoneAddSensorComponent implements OnInit {

    public cancelled = new EventEmitter();
    public submitted = new EventEmitter();
    public zonesVarietiesSensorsId: number;
    private zonesVarietiesSensors: ZonesVarietiesSensors;
    private sensors: Sensor[];

    constructor(
        private sensorService: SensorService,
        private zoneService: ZoneService,
        private webStorageService: WebStorageService,
    ) {}

    ngOnInit(): void {
        this.getSensorsByUser(this.webStorageService.getItem('user').id);
        this.zonesVarietiesSensors = new ZonesVarietiesSensors();
        this.zonesVarietiesSensors.id = this.zonesVarietiesSensorsId;
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
     * Adds a sensor to a variety
     *
     * @param form
     */
    onSubmit(form) {

        if(form.valid) {
            this.zoneService
                .addSensor(this.zonesVarietiesSensors)
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