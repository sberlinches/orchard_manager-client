import { Component, OnInit, EventEmitter } from '@angular/core';
// Services
import { WebStorageService } from "../../shared/services/web-storage.service";
import { SensorService } from '../../sensor/sensor.service';
// Models
import { Sensor } from '../../sensor/sensor';

@Component({
    selector: 'zone-add-sensor',
    templateUrl: '../views/zone-add-sensor.component.html'
})

export class ZoneAddSensorComponent implements OnInit {

    removeModal = new EventEmitter();
    private user: any;
    private sensors: Sensor[];

    constructor(
        private sensorService: SensorService,
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
     * @param {number} userId The user id
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
     * Triggers the parent function and destroys the modal
     */
    cancel() {
        this.removeModal.emit();
    }
}