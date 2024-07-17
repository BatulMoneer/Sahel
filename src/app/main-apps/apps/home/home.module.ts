import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { StoreHomeComponent } from './store-home/store-home.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';


@NgModule({
  declarations: [
    StoreHomeComponent,
    ManagerHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
