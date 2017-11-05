import { NgModule } from '@angular/core';
// Imports
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { authRouting } from './auth.routing';
// Declarations
import { LoginComponent } from './components/login.component';
import { LogoutComponent } from './components/logout.component';
// Providers
import { AuthService } from './services/auth.service';
import { WebStorageService } from '../shared/services/web-storage.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        authRouting
    ],
    declarations: [
        LoginComponent,
        LogoutComponent
    ],
    providers: [
        AuthService,
        WebStorageService
    ]
})

export class AuthModule {}