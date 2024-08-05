import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInformationRoutingModule } from './my-information-routing.module';
import { StoreMyInformationComponent } from './store-my-information/store-my-information.component';
import { ManagerMyInformationComponent } from './manager-my-information/manager-my-information.component';
import { CustomerMyInformationComponent } from './customer-my-information/customer-my-information.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { CollectorMyInformationComponent } from './collector-my-information/collector-my-information.component';
import { EditCollectorInformationComponent } from './edit-collector-information/edit-collector-information.component';
import { CollectorViewRecieptsComponent } from './collector-view-reciepts/collector-view-reciepts.component';
import { CollectorRequestWalletComponent } from './collector-request-wallet/collector-request-wallet.component';
import { CollectorViewPaymentsComponent } from './collector-view-payments/collector-view-payments.component';
import { CollectorRecieptDetailsComponent } from './collector-reciept-details/collector-reciept-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    StoreMyInformationComponent,
    ManagerMyInformationComponent,
    CustomerMyInformationComponent,
    CollectorMyInformationComponent,
    EditCollectorInformationComponent,
    CollectorViewRecieptsComponent,
    CollectorRequestWalletComponent,
    CollectorViewPaymentsComponent,
    CollectorRecieptDetailsComponent
  ],
  imports: [
    CommonModule,
    MyInformationRoutingModule,
    SharedComponentsModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomerMyInformationComponent

  ]
})

export class MyInformationModule { }
