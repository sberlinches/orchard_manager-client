import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './components/settings.component';
import { SettingsPasswordComponent } from './components/settings-password.component';
import { SettingsProfileComponent } from './components/settings-profile.component';
import { SettingsSensorsComponent } from './components/settings-sensors.component';

const settingsRoutes: Routes = [
    {
        path: 'settings',
        component: SettingsComponent,
        children: [
            {
                path: '',
                redirectTo: 'profile',
                pathMatch: 'full'
            },
            {
                path: 'password',
                component: SettingsPasswordComponent,
            },
            {
                path: 'profile',
                component: SettingsProfileComponent
            },
            {
                path: 'sensors',
                component: SettingsSensorsComponent
            }
        ]
    }
];

export const settingsRouting: ModuleWithProviders = RouterModule.forChild(settingsRoutes);