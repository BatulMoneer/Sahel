import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInformationRoutingModule } from './my-information-routing.module';
import { StoreMyInformationComponent } from './store-my-information/store-my-information.component';
import { ManagerMyInformationComponent } from './manager-my-information/manager-my-information.component';
import { CustomerMyInformationComponent } from './customer-my-information/customer-my-information.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';


@NgModule({
  declarations: [
    StoreMyInformationComponent,
    ManagerMyInformationComponent,
    CustomerMyInformationComponent
  ],
  imports: [
    CommonModule,
    MyInformationRoutingModule,
    SharedComponentsModule
  ]
})
export class MyInformationModule { }
