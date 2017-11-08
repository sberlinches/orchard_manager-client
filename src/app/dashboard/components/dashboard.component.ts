import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
// Services
import { WebStorageService } from "../../shared/services/web-storage.service";
import { ZoneService } from "../../zone/zone.service";
// Models
import { Zone } from "../../zone/zone";
// Components
import { ZoneAddSensorComponent } from '../../zone/components/zone-add-sensor.component';

@Component({
    selector: 'dashboard',
    entryComponents: [ ZoneAddSensorComponent ],
    templateUrl: '../views/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    @ViewChild('modal', {read: ViewContainerRef}) modal: ViewContainerRef;

    private user;
    private zones: Zone[];
    private zone: Zone;

    constructor(
        private zoneService: ZoneService,
        private webStorageService: WebStorageService,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    ngOnInit() {
        this.user = this.webStorageService.getItem('user');
        this.getZonesByUser(this.user.id);
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
                zone => this.zone = zone as Zone,
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
     *
     * @param {number} zoneId
     * @param {number} varietyId
     */
    addSensor(zoneId: number, varietyId: number): void {

        this.modal.clear();

        let dialogComponentFactory  = this.componentFactoryResolver.resolveComponentFactory(ZoneAddSensorComponent);
        let dialogComponentRef      = this.modal.createComponent(dialogComponentFactory);

        dialogComponentRef.instance.zoneId      = zoneId;
        dialogComponentRef.instance.varietyId   = varietyId;

        dialogComponentRef.instance.cancelled.subscribe(() => {
            dialogComponentRef.destroy();
        });

        dialogComponentRef.instance.submitted.subscribe(() => {
            dialogComponentRef.destroy();
            this.getZone(zoneId); // TODO: retrieve all the data again is not the solution!!
        })
    }

    /**
     *
     * @param {number} zoneId
     * @param {number} varietyId
     * @param {number} sensorId
     */
    removeSensor(zoneId: number, varietyId: number, sensorId: number): void {

        this.zoneService
            .removeSensor(zoneId, varietyId, sensorId)
            .subscribe(
                response => {
                    console.log(response); // TODO: manage the response
                    this.getZone(zoneId); // TODO: retrieve all the data again is not the solution!!
                },
                error => console.error(error) // TODO: error management
            );
    }
}