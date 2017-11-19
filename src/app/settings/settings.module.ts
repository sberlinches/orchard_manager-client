import { NgModule } from '@angular/core';
// Imports
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { settingsRouting } from './settings.routing';
// Declarations
import { SettingsComponent } from './components/settings.component';
import { UserEditComponent } from '../user/components/user-edit.component';
import { UserEditPasswordComponent } from '../user/components/user-edit-password.component';
import { UserListSensorComponent } from '../user/components/user-list-sensor.component';

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
        UserListSensorComponent
    ],
    providers: []
})

export class SettingsModule {}