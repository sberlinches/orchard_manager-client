import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
// Services
import { PlantLogService } from "../../plant-log/plant-log.service";
import { WebStorageService } from "../../shared/services/web-storage.service";
import { ZoneService } from "../../zone/zone.service";
// Models
import { Zone } from "../../zone/zone";
// Components
import { ZoneAddCollaboratorComponent } from "../../zone/components/zone-add-collaborator.component";
import { ZoneAddSensorComponent } from '../../zone/components/zone-add-sensor.component';
import { ZoneAddVarietyComponent } from "../../zone/components/zone-add-variety.component";
import { ZoneChangeSensorComponent } from "../../zone/components/zone-change-sensor.component";
import { ZoneNewComponent } from '../../zone/components/zone-new.component';

@Component({
    selector: 'dashboard',
    entryComponents: [
        ZoneAddCollaboratorComponent,
        ZoneAddSensorComponent,
        ZoneAddVarietyComponent,
        ZoneChangeSensorComponent,
        ZoneNewComponent
    ],
    templateUrl: '../views/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    // modal is the div id where the component is going to be injected
    @ViewChild('modal', {read: ViewContainerRef}) modal: ViewContainerRef;

    private zones: Zone[];
    private zone: any;
    private plantLog: object;

    constructor(
        private plantLogService: PlantLogService,
        private zoneService: ZoneService,
        private webStorageService: WebStorageService,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    ngOnInit() {
        this.getZonesByUser(this.webStorageService.getItem('user').id);
    }

    // TODO: create a service por this permissions thing!!!!
    private roleId: number;
    private setActiveRole(value: number): void {
        this.roleId = value;
    }
    private canCreate(): boolean {
        return (this.roleId === 1);
    }
    private canEdit(): boolean {
        return (this.roleId === 1 || this.roleId === 2);
    }
    private canDelete(): boolean {
        return (this.roleId === 1);
    }

    /**
     * Gets a zone and optionally its associated details
     *
     * @param zoneId The zone id
     */
    private getZone(zoneId): void {

        this.zoneService
            .getZone(zoneId)
            .subscribe(
                zone => this.zone = zone,
                error => console.error(error) // TODO: error management
            );
    }

    /**
     * Gets all zones where the user is: Owner, collaborator and follower
     *
     * @param userId The user id
     */
    private getZonesByUser(userId): void {

        this.zoneService
            .getZonesByUser(userId)
            .subscribe(
                zones => this.zones = zones as Zone[],
                error => console.error(error) // TODO: error management
            );
    }

    /**
     * Gets the last record on the log for the given plant
     *
     * @param {number} plantLogId
     */
    private getLastLog(plantLogId: number): void {

        this.plantLog = null;

        this.plantLogService
            .getLastLog(plantLogId)
            .subscribe(
                plantLog => this.plantLog = plantLog as object,
                error => console.error(error) // TODO: error management
            );
    }

    /**
     * Creates a new zone
     */
    private createZone(): void {

        this.modal.clear();

        let dialogComponentFactory  = this.componentFactoryResolver.resolveComponentFactory(ZoneNewComponent);
        let dialogComponentRef      = this.modal.createComponent(dialogComponentFactory);

        dialogComponentRef.instance.cancelled.subscribe(() => {
            dialogComponentRef.destroy();
        });

        dialogComponentRef.instance.submitted.subscribe(() => {
            dialogComponentRef.destroy();
            this.getZonesByUser(this.webStorageService.getItem('user').id); // TODO: retrieve all the data again is not the solution!!
        })
    }

    /**
     * Deletes a zone and its associated details (Performed in DB side)
     *
     * @param {number} zoneId
     */
    private deleteZone(zoneId: number): void {

        this.zoneService
            .deleteZone(zoneId)
            .subscribe(
                response => {
                    console.log(response); // TODO: manage the response
                    this.getZonesByUser(this.webStorageService.getItem('user').id); // TODO: retrieve all the data again is not the solution!!
                },
                error => console.error(error) // TODO: error management
            );
    }

    /**
     * Adds a variety to a zone
     *
     * @param {number} zoneId
     */
    private addVariety(zoneId: number): void {

        this.modal.clear();

        let dialogComponentFactory  = this.componentFactoryResolver.resolveComponentFactory(ZoneAddVarietyComponent);
        let dialogComponentRef      = this.modal.createComponent(dialogComponentFactory);

        dialogComponentRef.instance.zoneId = zoneId;

        dialogComponentRef.instance.cancelled.subscribe(() => {
            dialogComponentRef.destroy();
        });

        dialogComponentRef.instance.submitted.subscribe(() => {
            dialogComponentRef.destroy();
            this.getZone(zoneId); // TODO: retrieve all the data again is not the solution!!
        })
    }

    /**
     * Removes the variety from the zone
     *
     * @param {number} zonesVarietiesSensorsId
     * @param {number} zoneId
     */
    private removeVariety(zonesVarietiesSensorsId: number, zoneId: number): void {

        this.zoneService
            .removeVariety(zonesVarietiesSensorsId)
            .subscribe(
                response => {
                    console.log(response); // TODO: manage the response
                    this.getZone(zoneId); // TODO: retrieve all the data again is not the solution!!
                },
                error => console.error(error) // TODO: error management
            );
    }

    /**
     * Adds a sensor to a variety
     *
     * @param {number} zonesVarietiesSensorsId
     * @param {number} zoneId
     */
    private addSensor(zonesVarietiesSensorsId: number, zoneId: number): void {

        this.modal.clear();

        let dialogComponentFactory  = this.componentFactoryResolver.resolveComponentFactory(ZoneAddSensorComponent);
        let dialogComponentRef      = this.modal.createComponent(dialogComponentFactory);

        dialogComponentRef.instance.zonesVarietiesSensorsId = zonesVarietiesSensorsId;

        dialogComponentRef.instance.cancelled.subscribe(() => {
            dialogComponentRef.destroy();
        });

        dialogComponentRef.instance.submitted.subscribe(() => {
            dialogComponentRef.destroy();
            this.getZone(zoneId); // TODO: retrieve all the data again is not the solution!!
        })
    }

    /**
     * Changes the sensor of a variety
     *
     * @param {number} zonesVarietiesSensorsId
     * @param {number} sensorId
     * @param {number} zoneId
     */
    private changeSensor(zonesVarietiesSensorsId: number, sensorId: number, zoneId: number): void {

        this.modal.clear();

        let dialogComponentFactory  = this.componentFactoryResolver.resolveComponentFactory(ZoneChangeSensorComponent);
        let dialogComponentRef      = this.modal.createComponent(dialogComponentFactory);

        dialogComponentRef.instance.zonesVarietiesSensorsId = zonesVarietiesSensorsId;
        dialogComponentRef.instance.sensorId                = sensorId;

        dialogComponentRef.instance.cancelled.subscribe(() => {
            dialogComponentRef.destroy();
        });

        dialogComponentRef.instance.submitted.subscribe(() => {
            dialogComponentRef.destroy();
            this.getZone(zoneId); // TODO: retrieve all the data again is not the solution!!
        })
    }

    /**
     * Removes the sensor from the variety
     *
     * @param {number} zonesVarietiesSensorsId
     * @param {number} zoneId
     */
    private removeSensor(zonesVarietiesSensorsId: number, zoneId: number): void {

        this.zoneService
            .removeSensor(zonesVarietiesSensorsId)
            .subscribe(
                response => {
                    console.log(response); // TODO: manage the response
                    this.getZone(zoneId); // TODO: retrieve all the data again is not the solution!!
                },
                error => console.error(error) // TODO: error management
            );
    }

    /**
     * Adds a user (collaborator) to a zone
     *
     * @param {number} zoneId
     */
    private addCollaborator(zoneId: number): void {

        this.modal.clear();

        let dialogComponentFactory  = this.componentFactoryResolver.resolveComponentFactory(ZoneAddCollaboratorComponent);
        let dialogComponentRef      = this.modal.createComponent(dialogComponentFactory);

        dialogComponentRef.instance.zoneId = zoneId;

        dialogComponentRef.instance.cancelled.subscribe(() => {
            dialogComponentRef.destroy();
        });

        dialogComponentRef.instance.submitted.subscribe(() => {
            dialogComponentRef.destroy();
            this.getZone(zoneId); // TODO: retrieve all the data again is not the solution!!
        })
    }
}