import { NgModule } from '@angular/core';
// Imports
import { CommonModule } from '@angular/common';
import { dashboardRouting } from './dashboard.routing';
// Declarations
import { DashboardComponent } from './components/dashboard.component';
import { SensorAddComponent } from '../sensor/components/sensor-add.component';
// Providers
import { isAuthenticated } from "../shared/guards/is-authenticated";

@NgModule({
    imports: [
        CommonModule,
        dashboardRouting
    ],
    declarations: [
        DashboardComponent,
        SensorAddComponent
    ],
    entryComponents: [
        SensorAddComponent
    ],
    providers: [
        isAuthenticated
    ]
})

export class DashboardModule {}