import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupRoutingModule } from './popup-routing.module';
import { AddToCartPopComponent } from './add-to-cart-pop/add-to-cart-pop.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PayNowPopComponent } from './pay-now-pop/pay-now-pop.component';
import { CancelProductPopComponent } from './cancel-product-pop/cancel-product-pop.component';
import { ChangeHighProductPopComponent } from './change-high-product-pop/change-high-product-pop.component';
import { ChangeLowProductPopComponent } from './change-low-product-pop/change-low-product-pop.component';
import { InfoUpdatedPopComponent } from './info-updated-pop/info-updated-pop.component';
import { OtpPopComponent } from './otp-pop/otp-pop.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { AccountVerifyComponent } from './account-verify/account-verify.component';
import { Otp2PopComponent } from './otp2-pop/otp2-pop.component';


@NgModule({
  declarations: [
    AddToCartPopComponent,
    PayNowPopComponent,
    CancelProductPopComponent,
    ChangeHighProductPopComponent,
    ChangeLowProductPopComponent,
    InfoUpdatedPopComponent,
    OtpPopComponent,
    AccountVerifyComponent,
    Otp2PopComponent,
  ],
  imports: [
    CommonModule,
    PopupRoutingModule,
    MatDialogModule,
    NgOtpInputModule,


  ],
  exports: [
    AddToCartPopComponent,
    PayNowPopComponent,
    CancelProductPopComponent,
    ChangeHighProductPopComponent,
    ChangeLowProductPopComponent,
    InfoUpdatedPopComponent,
    OtpPopComponent,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class PopupModule { }
