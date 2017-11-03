import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { SensorAddComponent } from '../../sensor/components/sensor-add.component';

@Component({
    selector: 'dashboard',
    entryComponents: [ SensorAddComponent ],
    templateUrl: '../views/dashboard.component.html'
})

export class DashboardComponent {

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef
    ) {}

    private addSensor() {

        const factory = this.componentFactoryResolver.resolveComponentFactory(SensorAddComponent);
        const ref = this.viewContainerRef.createComponent(factory);

        ref.changeDetectorRef.detectChanges();
    }
}