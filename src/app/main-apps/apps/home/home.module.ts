import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { StoreHomeComponent } from './store-home/store-home.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { CollectorHomeComponent } from './collector-home/collector-home.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    StoreHomeComponent,
    ManagerHomeComponent,
    CustomerHomeComponent,
    CollectorHomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentsModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule

  ]
})
export class HomeModule { }
