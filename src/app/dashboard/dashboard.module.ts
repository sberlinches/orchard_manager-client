import { NgModule } from '@angular/core';
// Imports
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { dashboardRouting } from './dashboard.routing';
// Declarations
import { DashboardComponent } from './components/dashboard.component';
import { ZoneAddCollaboratorComponent } from '../zone/components/zone-add-collaborator.component';
import { ZoneAddSensorComponent } from '../zone/components/zone-add-sensor.component';
import { ZoneAddVarietyComponent } from "../zone/components/zone-add-variety.component";
import { ZoneChangeSensorComponent } from "../zone/components/zone-change-sensor.component";
import { ZoneNewComponent } from '../zone/components/zone-new.component';
import { ObjectFilterPipe } from "../shared/pipes/objectFilter.pipe";
// Providers
import { PlantService } from "../plant/plant.service";
import { PlantLogService } from "../plant-log/plant-log.service";
import { SensorService } from "../sensor/sensor.service";
import { VarietyService } from "../variety/variety.service";
import { ZoneService } from "../zone/zone.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        dashboardRouting
    ],
    declarations: [
        DashboardComponent,
        ZoneAddCollaboratorComponent,
        ZoneAddSensorComponent,
        ZoneAddVarietyComponent,
        ZoneChangeSensorComponent,
        ZoneNewComponent,
        ObjectFilterPipe
    ],
    providers: [
        PlantService,
        PlantLogService,
        SensorService,
        VarietyService,
        ZoneService
    ]
})

export class DashboardModule {}