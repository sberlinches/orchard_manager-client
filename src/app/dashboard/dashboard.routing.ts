import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { DashboardComponent } from './components/dashboard.component';
// Services
import { isAuthenticated } from "../shared/guards/is-authenticated";

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [isAuthenticated],
    }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);