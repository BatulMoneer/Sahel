import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupRoutingModule } from './popup-routing.module';
import { AddToCartPopComponent } from './add-to-cart-pop/add-to-cart-pop.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PayNowPopComponent } from './pay-now-pop/pay-now-pop.component';
import { CancelProductPopComponent } from './cancel-product-pop/cancel-product-pop.component';
import { ChangeHighProductPopComponent } from './change-high-product-pop/change-high-product-pop.component';
import { ChangeLowProductPopComponent } from './change-low-product-pop/change-low-product-pop.component';
import { InfoUpdatedPopComponent } from './info-updated-pop/info-updated-pop.component';


@NgModule({
  declarations: [
    AddToCartPopComponent,
    PayNowPopComponent,
    CancelProductPopComponent,
    ChangeHighProductPopComponent,
    ChangeLowProductPopComponent,
    InfoUpdatedPopComponent,
  ],
  imports: [
    CommonModule,
    PopupRoutingModule,
    MatDialogModule
  ]
})
export class PopupModule { }
