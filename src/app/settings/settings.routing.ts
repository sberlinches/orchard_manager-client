import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { SettingsComponent } from './components/settings.component';
import { UserEditComponent } from '../user/components/user-edit.component';
import { UserEditPasswordComponent } from '../user/components/user-edit-password.component';
import { SensorListComponent } from '../sensor/components/sensor-list.component';
// Services
import { IsAuthenticated } from "../shared/guards/is-authenticated";

const settingsRoutes: Routes = [
    {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [IsAuthenticated],
        children: [
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full'
            },
            {
                path: 'password',
                component: UserEditPasswordComponent,
            },
            {
                path: 'profile',
                component: UserEditComponent
            },
            {
                path: 'sensors',
                component: SensorListComponent
            }
        ]
    }
];

export const settingsRouting: ModuleWithProviders = RouterModule.forChild(settingsRoutes);