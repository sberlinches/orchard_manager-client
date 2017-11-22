import { Component, OnInit, EventEmitter } from '@angular/core';
// Services
import { SensorService } from '../../sensor/sensor.service';
import { WebStorageService } from "../../shared/services/web-storage.service";
// Models
import { Sensor } from '../../sensor/sensor';

@Component({
    selector: 'user-register-sensor',
    templateUrl: '../views/user-register-sensor.component.html'
})

export class UserRegisterSensorComponent implements OnInit {

    cancelled = new EventEmitter();
    submitted = new EventEmitter();

    sensors: Sensor[];
    sensor: Sensor;

    constructor(
        private sensorService: SensorService,
        private webStorageService: WebStorageService
    ) {}

    /**
     *
     */
    ngOnInit(): void {

        this.getUnregisteredSensors();

        this.sensor = new Sensor();
        this.sensor.userId = this.webStorageService.getItem('user').id;
    }

    /**
     * Get the sensors that have not been registered already
     * TODO: temporal approach to add sensors
     */
    getUnregisteredSensors(): void {

        this.sensorService
            .getSensorsByUser(0)
            .subscribe(
                sensors => this.sensors = sensors as Sensor[],
                error => console.error(error) // TODO: error management
            )
    }

    /**
     * Registers the sensor to an user
     *
     * @param form
     */
    onSubmit(form) {

        if(form.valid) {
            this.sensorService
                .registerSensor(this.sensor)
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