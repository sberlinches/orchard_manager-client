import { NgModule } from '@angular/core';
// Imports
import { CommonModule } from '@angular/common';
import { dashboardRouting } from './dashboard.routing';
// Declarations
import { DashboardComponent } from './components/dashboard.component';
import { SensorAddComponent } from '../sensor/components/sensor-add.component';

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
    providers: []
})

export class DashboardModule {}