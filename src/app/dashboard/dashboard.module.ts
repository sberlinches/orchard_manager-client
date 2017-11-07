import { NgModule } from '@angular/core';
// Imports
import { CommonModule } from '@angular/common';
import { dashboardRouting } from './dashboard.routing';
// Declarations
import { DashboardComponent } from './components/dashboard.component';
import { SensorAddComponent } from '../sensor/components/sensor-add.component';
import { ObjectFilterPipe } from "../shared/pipes/objectFilter.pipe";
// Providers
import { ZoneService } from "../zone/zone.service";

@NgModule({
    imports: [
        CommonModule,
        dashboardRouting
    ],
    declarations: [
        DashboardComponent,
        SensorAddComponent,
        ObjectFilterPipe
    ],
    entryComponents: [
        SensorAddComponent
    ],
    providers: [
        ZoneService
    ]
})

export class DashboardModule {}