import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertsRoutingModule } from './alerts-routing.module';
import { ManagerAlertsComponent } from './manager-alerts/manager-alerts.component';


@NgModule({
  declarations: [
    ManagerAlertsComponent
  ],
  imports: [
    CommonModule,
    AlertsRoutingModule
  ]
})
export class AlertsModule { }
