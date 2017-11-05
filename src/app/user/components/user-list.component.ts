import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'user-list',
    templateUrl: '../views/user-list.component.html',
    providers: []
})

export class UserListComponent implements OnInit {

    error: string;
    users: User[];

    constructor(
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.userService
            .getUsers()
            .subscribe(
                data => this.users = data as User[],
                error => this.error = error
            )
    }
}