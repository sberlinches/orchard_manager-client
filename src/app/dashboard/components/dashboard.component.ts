import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
// Services
import { WebStorageService } from "../../shared/services/web-storage.service";
import { SensorService } from "../../sensor/sensor.service";
import { ZoneService } from "../../zone/zone.service";
// Models
import { Zone } from "../../zone/zone";
import { User } from "../../user/user";
// Components
import { ZoneAddSensorComponent } from '../../zone/components/zone-add-sensor.component';

@Component({
    selector: 'dashboard',
    entryComponents: [ ZoneAddSensorComponent ],
    templateUrl: '../views/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    @ViewChild('modal', {read: ViewContainerRef}) modal: ViewContainerRef;

    private user: User;
    private zones: Zone[];
    private zone: Zone;

    constructor(
        private sensorService: SensorService,
        private zoneService: ZoneService,
        private webStorageService: WebStorageService,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    ngOnInit() {
        this.user = this.webStorageService.getItem('user');
        this.getZonesByUser(this.user.id);
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
     */
    addSensor() {

        this.modal.clear();

        let dialogComponentFactory  = this.componentFactoryResolver.resolveComponentFactory(ZoneAddSensorComponent);
        let dialogComponentRef      = this.modal.createComponent(dialogComponentFactory);

        dialogComponentRef.instance.removeModal.subscribe(() => {
            dialogComponentRef.destroy();
        })
    }
}