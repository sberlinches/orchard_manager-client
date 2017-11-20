import { Component, OnInit, EventEmitter } from '@angular/core';
// Services
import { UserService } from '../../user/user.service';
import { ZoneService } from '../zone.service';
// Models
import { User } from "../../user/user";
import { ZonesUsers } from "../zonesUsers";

@Component({
    selector: 'zone-add-collaborator',
    templateUrl: '../views/zone-add-collaborator.component.html'
})

export class ZoneAddCollaboratorComponent implements OnInit {

    public cancelled = new EventEmitter();
    public submitted = new EventEmitter();
    public zoneId: number;

    private users: User[];
    private zoneUser: ZonesUsers;

    constructor(
        private userService: UserService,
        private zoneService: ZoneService
    ) {}

    ngOnInit(): void {
        this.getUsers();
        this.zoneUser = new ZonesUsers();
        this.zoneUser.zoneId = this.zoneId;
    }

    /**
     * Gets all users
     */
    getUsers(): void {

        this.userService
            .getUsers()
            .subscribe(
                users => this.users = users as User[],
                error => console.error(error) // TODO: error management
            );
    }

    /**
     * Adds a user (collaborator) to a zone
     *
     * @param form
     */
    onSubmit(form) {

        if(form.valid) {
            this.zoneService
                .addCollaborator(this.zoneUser)
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