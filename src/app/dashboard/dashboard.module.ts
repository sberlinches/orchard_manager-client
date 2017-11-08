import { NgModule } from '@angular/core';
// Imports
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { dashboardRouting } from './dashboard.routing';
// Declarations
import { DashboardComponent } from './components/dashboard.component';
import { ZoneAddSensorComponent } from '../zone/components/zone-add-sensor.component';
import { ObjectFilterPipe } from "../shared/pipes/objectFilter.pipe";
// Providers
import { SensorService } from "../sensor/sensor.service";
import { ZoneService } from "../zone/zone.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        dashboardRouting
    ],
    declarations: [
        DashboardComponent,
        ZoneAddSensorComponent,
        ObjectFilterPipe
    ],
    providers: [
        SensorService,
        ZoneService
    ]
})

export class DashboardModule {}