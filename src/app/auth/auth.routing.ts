import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { LoginComponent } from './components/login.component';
import { LogoutComponent } from './components/logout.component';
// Services
import { isAuthenticated } from "../shared/guards/is-authenticated";

const authRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [isAuthenticated],
    }
];

export const authRouting: ModuleWithProviders = RouterModule.forChild(authRoutes);