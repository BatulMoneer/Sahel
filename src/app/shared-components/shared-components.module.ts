import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card/item-card.component';
import { ButtonComponent } from './button/button.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { RouterModule } from '@angular/router';
import { TextFieldComponent } from './text-field/text-field.component';
import { PassFieldComponent } from './pass-field/pass-field.component';
import { CartCardComponent } from './cart-card/cart-card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChangeCardComponent } from './change-card/change-card.component';
import { CollectorOrderComponent } from './collector-order/collector-order.component';
import { RecieptComponent } from './reciept/reciept.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    ItemCardComponent,
    ButtonComponent,
    TextFieldComponent,
    PassFieldComponent,
    ShopCardComponent,
    CartCardComponent,
    CheckboxComponent,
    ChangeCardComponent,
    CollectorOrderComponent,
    RecieptComponent,
    PaymentComponent,

  ],
  imports: [

    CommonModule,
    RouterModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ItemCardComponent,
    ButtonComponent,
    TextFieldComponent,
    PassFieldComponent,
    ShopCardComponent,
    CartCardComponent,
    CheckboxComponent,
    ChangeCardComponent,
    CollectorOrderComponent,
    RecieptComponent,
    PaymentComponent,


  ]
})
export class SharedComponentsModule { }
