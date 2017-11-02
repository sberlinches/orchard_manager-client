import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { settingsRouting } from './settings.routing';

import { SettingsComponent } from './components/settings.component';
import { SettingsPasswordComponent } from './components/settings-password.component';
import { SettingsProfileComponent } from './components/settings-profile.component';
import { SettingsSensorsComponent } from './components/settings-sensors.component';

@NgModule({
    imports: [
        CommonModule,
        settingsRouting
    ],
    declarations: [
        SettingsComponent,
        SettingsPasswordComponent,
        SettingsProfileComponent,
        SettingsSensorsComponent
    ]
})

export class SettingsModule {}