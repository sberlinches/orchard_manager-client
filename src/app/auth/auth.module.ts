import { NgModule } from '@angular/core';
// Imports
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { authRouting } from './auth.routing';
// Declarations
import { LoginComponent } from './components/login.component';
import { LogoutComponent } from './components/logout.component';
import { SignUpComponent } from './components/sign-up.component';
// Providers
import { AuthService } from './auth.service';
import { isAuthenticated } from "../shared/guards/is-authenticated";
import { WebStorageService } from '../shared/services/web-storage.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        authRouting
    ],
    declarations: [
        LoginComponent,
        LogoutComponent,
        SignUpComponent
    ],
    providers: [
        AuthService,
        isAuthenticated,
        WebStorageService
    ]
})

export class AuthModule {}