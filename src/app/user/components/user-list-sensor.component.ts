import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
// Services
import { SensorService } from '../../sensor/sensor.service';
import { WebStorageService } from "../../shared/services/web-storage.service";
// Model
import { Sensor } from '../../sensor/sensor';
// Components
import { UserRegisterSensorComponent } from './user-register-sensor.component';

@Component({
    selector: 'user-list-sensor',
    entryComponents: [
        UserRegisterSensorComponent
    ],
    templateUrl: '../views/user-list-sensor.component.html'
})

export class UserListSensorComponent implements OnInit {

    // modal is the div id where the component is going to be injected
    @ViewChild('modal', {read: ViewContainerRef}) modal: ViewContainerRef;

    private sensors: Sensor[];

    constructor(
        private sensorService: SensorService,
        private webStorageService: WebStorageService,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    ngOnInit(): void {
        this.getSensorsByUser(this.webStorageService.getItem('user').id);
    }

    /**
     * Gets all sensors owned by the user given
     */
    private getSensorsByUser(userId: number): void {

        this.sensorService
            .getSensorsByUser(userId)
            .subscribe(
                data => this.sensors = data as Sensor[],
                error => console.error(error) // TODO: error management
            )
    }

    /**
     * Registers the sensor to an user
     */
    private registerSensor(): void {

        this.modal.clear();

        let dialogComponentFactory  = this.componentFactoryResolver.resolveComponentFactory(UserRegisterSensorComponent);
        let dialogComponentRef      = this.modal.createComponent(dialogComponentFactory);

        dialogComponentRef.instance.cancelled.subscribe(() => {
            dialogComponentRef.destroy();
        });

        dialogComponentRef.instance.submitted.subscribe(() => {
            dialogComponentRef.destroy();
            this.getSensorsByUser(this.webStorageService.getItem('user').id); // TODO: retrieve all the data again is not the solution!!
        })
    }

    /**
     * De-registers the sensor from the user
     *
     * @param sensorId
     */
    private deregisterSensor(sensorId: number): void {

        /**
         * Given an array of objects, removes the the entire object that the property matches with the value.
         * TODO: move this function to a better place
         *
         * array = [
         *     {property: value1},
         *     {property: value2}
         * ]
         *
         * removeByObjectProperty(array, property, value2);
         *
         * @param array
         * @param {string} property
         * @param value
         * @returns {boolean}
         */
        function removeByObjectProperty(array: any, property: string, value: any): boolean {

            // Look for the object position that matches with the property and value given
            let index = array.findIndex(function(object) {
                return object[property] === value;
            });

            // Removes the object and returns true, if it was found
            // Otherwise false
            if(index !== -1) {
                array.splice(index, 1);
                return true;
            } else {
                return false
            }
        }

        this.sensorService
            .deregisterSensor(sensorId)
            .subscribe(
                data => removeByObjectProperty(this.sensors, 'id', sensorId),
                error => console.error(error) // TODO: error management
            )
    }
}