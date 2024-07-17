import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card/item-card.component';
import { ButtonComponent } from './button/button.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { RouterModule } from '@angular/router';
import { TextFieldComponent } from './text-field/text-field.component';
import { PassFieldComponent } from './pass-field/pass-field.component';


@NgModule({
  declarations: [
    ItemCardComponent,
    ButtonComponent,
    TextFieldComponent,
    PassFieldComponent,
    ShopCardComponent,

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

  ]
})
export class SharedComponentsModule { }
