import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { ManagerTransferRequestComponent } from './manager-transfer-request/manager-transfer-request.component';
import { ChooseManagerRegistrationRequestsComponent } from './choose-manager-registration-requests/choose-manager-registration-requests.component';
import { ManagerRepresentativeRegistrationRequestsComponent } from './manager-representative-registration-requests/manager-representative-registration-requests.component';
import { ManagerStoresRegistrationRequestsComponent } from './manager-stores-registration-requests/manager-stores-registration-requests.component';


@NgModule({
  declarations: [
    ManagerTransferRequestComponent,
    ChooseManagerRegistrationRequestsComponent,
    ManagerRepresentativeRegistrationRequestsComponent,
    ManagerStoresRegistrationRequestsComponent
  ],
  imports: [
    CommonModule,
    RequestsRoutingModule
  ]
})
export class RequestsModule { }