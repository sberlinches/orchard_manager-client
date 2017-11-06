import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { LoginComponent } from './components/login.component';
import { LogoutComponent } from './components/logout.component';
import { SignUpComponent } from './components/sign-up.component';
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
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    }
];

export const authRouting: ModuleWithProviders = RouterModule.forChild(authRoutes);