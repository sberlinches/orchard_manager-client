import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
// Services
import { WebStorageService } from "../../shared/services/web-storage.service";
import { ZoneService } from "../../zone/zone.service";
// Models
import { Zone } from "../../zone/zone";
import { User } from "../../user/user";
// Components
import { SensorAddComponent } from '../../sensor/components/sensor-add.component';

@Component({
    selector: 'dashboard',
    entryComponents: [ SensorAddComponent ],
    templateUrl: '../views/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    private user: User;
    private zones: Zone[];
    private zone: Zone;

    constructor(
        private zoneService: ZoneService,
        private webStorageService: WebStorageService,

        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef
    ) {
        this.user = this.webStorageService.getItem('user');
    }

    ngOnInit() {
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

    private addSensor() {

        const factory = this.componentFactoryResolver.resolveComponentFactory(SensorAddComponent);
        const ref = this.viewContainerRef.createComponent(factory);

        ref.changeDetectorRef.detectChanges();
    }
}