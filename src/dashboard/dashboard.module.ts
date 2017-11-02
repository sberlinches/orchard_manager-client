import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { dashboardRouting } from './dashboard.routing';

import { DashboardComponent } from './components/dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        dashboardRouting
    ],
    declarations: [
        DashboardComponent
    ]
})

export class DashboardModule {}