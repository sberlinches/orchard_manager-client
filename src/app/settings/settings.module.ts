import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { settingsRouting } from './settings.routing';

import { SettingsComponent } from './components/settings.component';
import { UserEditComponent } from '../user/components/user-edit.component';
import { UserEditPasswordComponent } from '../user/components/user-edit-password.component';
import { SensorListComponent } from '../sensor/components/sensor-list.component';

@NgModule({
    imports: [
        CommonModule,
        settingsRouting
    ],
    declarations: [
        SettingsComponent,
        UserEditComponent,
        UserEditPasswordComponent,
        SensorListComponent
    ]
})

export class SettingsModule {}