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
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    ItemCardComponent,
    ButtonComponent,
    TextFieldComponent,
    PassFieldComponent,
    ShopCardComponent,
    CartCardComponent,
    CheckboxComponent,
    TableComponent,


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
    TableComponent,


  ]
})
export class SharedComponentsModule { }
