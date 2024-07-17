import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInformationRoutingModule } from './my-information-routing.module';
import { StoreMyInformationComponent } from './store-my-information/store-my-information.component';
import { ManagerMyInformationComponent } from './manager-my-information/manager-my-information.component';


@NgModule({
  declarations: [
    StoreMyInformationComponent,
    ManagerMyInformationComponent
  ],
  imports: [
    CommonModule,
    MyInformationRoutingModule
  ]
})
export class MyInformationModule { }
