import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { userRouting } from './user.routing';

import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/user-list.component';

import { UserService } from "./user.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        userRouting
    ],
    declarations: [
        UserComponent,
        UserListComponent
    ],
    providers: [
        UserService
    ]
})

export class UserModule {}