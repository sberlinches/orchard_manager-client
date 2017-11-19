import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
    selector: 'user-list',
    templateUrl: '../views/user-list.component.html'
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