import { Component, OnInit, EventEmitter } from '@angular/core';
// Services
import { PlantService } from '../../plant/plant.service';
import { SensorService } from '../../sensor/sensor.service';
import { VarietyService } from '../../variety/variety.service';
import { WebStorageService } from "../../shared/services/web-storage.service";
import { ZoneService } from '../zone.service';
// Models
import { Plant } from '../../plant/plant';
import { Sensor } from '../../sensor/sensor';
import { Variety } from '../../variety/variety';
import { ZonesVarietiesSensors } from "../zonesVarietiesSensors";

@Component({
    selector: 'zone-add-variety',
    templateUrl: '../views/zone-add-variety.component.html'
})

export class ZoneAddVarietyComponent implements OnInit {

    cancelled = new EventEmitter();
    submitted = new EventEmitter();
    zoneId: number;
    zonesVarietiesSensors: ZonesVarietiesSensors;
    plants: Plant[];
    sensors: Sensor[];
    varieties: Variety[];

    constructor(
        private plantService: PlantService,
        private sensorService: SensorService,
        private varietyService: VarietyService,
        private webStorageService: WebStorageService,
        private zoneService: ZoneService
    ) {}

    ngOnInit(): void {
        this.getPlants();
        this.getSensorsByUser(this.webStorageService.getItem('user').id);
        this.zonesVarietiesSensors = new ZonesVarietiesSensors();
        this.zonesVarietiesSensors.zoneId = this.zoneId;
    }

    /**
     * Gets all the plants
     */
    getPlants(): void {

        this.plantService
            .getPlants()
            .subscribe(
                plants => this.plants = plants as Plant[],
                error => console.error(error) // TODO: error management
            );
    }

    /**
     * Gets all varieties belonging to a plant
     *
     * @param {number} plantId
     */
    getVarietiesByPlant(plantId: number): void {

        // Every time the plant selector call this method, the variety id needs to be reset to prevent the submission
        this.zonesVarietiesSensors.varietyId = null;

        this.varietyService
            .getVarietiesByPlant(plantId)
            .subscribe(
                varieties => this.varieties = varieties as Variety[],
                error => console.error(error) // TODO: error management
            );
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
                .addVariety(this.zonesVarietiesSensors)
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