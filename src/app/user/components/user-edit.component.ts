import { Component, OnInit } from '@angular/core';
// Services
import { UserService } from '../user.service';
import { WebStorageService } from "../../shared/services/web-storage.service";
// Models
import { User } from '../user';

@Component({
    selector: 'user-edit',
    templateUrl: '../views/user-edit.component.html'
})

export class UserEditComponent implements OnInit{

    user: User;
    todayDate: Date;

    constructor(
        private userService: UserService,
        private webStorageService: WebStorageService
    ) {}

    ngOnInit(): void {
        this.user       = this.webStorageService.getItem('user');
        this.todayDate  = new Date(); // TODO: External file
    }

    /**
     * Updates partially an user
     * TODO: Update partially
     *
     * @param form
     */
    onSubmit(form) {

        if(form.valid) {
            this.userService
                .updateUser(this.user)
                .subscribe(
                    result => this.webStorageService.setItem('user', this.user),
                    error => console.error(error) // TODO: error management
                );
        }
    }
}