import { NgModule } from '@angular/core';
// Imports
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { userRouting } from './user.routing';
// Declarations
import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/user-list.component';
import { UserRegisterSensorComponent } from './components/user-register-sensor.component';
// Providers
import { UserService } from "./user.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        userRouting
    ],
    declarations: [
        UserComponent,
        UserListComponent,
        UserRegisterSensorComponent
    ],
    providers: [
        UserService
    ]
})

export class UserModule {}