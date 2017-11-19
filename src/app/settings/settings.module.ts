import { NgModule } from '@angular/core';
// Imports
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { settingsRouting } from './settings.routing';
// Declarations
import { SettingsComponent } from './components/settings.component';
import { UserEditComponent } from '../user/components/user-edit.component';
import { UserEditPasswordComponent } from '../user/components/user-edit-password.component';
import { SensorListComponent } from '../sensor/components/sensor-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        settingsRouting
    ],
    declarations: [
        SettingsComponent,
        UserEditComponent,
        UserEditPasswordComponent,
        SensorListComponent
    ],
    providers: []
})

export class SettingsModule {}