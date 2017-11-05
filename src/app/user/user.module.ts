import { NgModule } from '@angular/core';
// Imports
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { userRouting } from './user.routing';
// Declarations
import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/user-list.component';
// Providers
import { UserService } from "./services/user.service";
import { isAuthenticated } from "../shared/guards/is-authenticated";

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
        UserService,
        isAuthenticated
    ]
})

export class UserModule {}