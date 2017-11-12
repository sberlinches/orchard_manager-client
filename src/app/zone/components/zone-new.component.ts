import { Component, OnInit, EventEmitter } from '@angular/core';
// Services
import { WebStorageService } from "../../shared/services/web-storage.service";
import { ZoneService } from '../zone.service';
import { Zone } from '../zone';

@Component({
    selector: 'zone-new',
    templateUrl: '../views/zone-new.component.html'
})

export class ZoneNewComponent implements OnInit {

    public cancelled = new EventEmitter();
    public submitted = new EventEmitter();
    private zone: Zone;

    constructor(
        private zoneService: ZoneService,
        private webStorageService: WebStorageService,
    ) {}

    ngOnInit(): void {
        this.zone = new Zone(this.webStorageService.getItem('user').id);
    }

    /**
     * Adds a new zone to the user
     *
     * @param form
     */
    onSubmit(form) {

        if(form.valid) {
            this.zoneService
                .newZone(this.zone)
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