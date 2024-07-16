import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card/item-card.component';
import { GreenButtonComponent } from './green-button/green-button.component';
import { PinkButtonComponent } from './pink-button/pink-button.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TextFieldComponent } from './text-field/text-field.component';
import { PassFieldComponent } from './pass-field/pass-field.component';


@NgModule({
  declarations: [
    ItemCardComponent,
    GreenButtonComponent,
    PinkButtonComponent,
    ShopCardComponent,
    TextFieldComponent,
    PassFieldComponent
  ],
  imports: [

    CommonModule,
    RouterModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    ItemCardComponent,
    GreenButtonComponent,
    PinkButtonComponent,
    ShopCardComponent,
    TextFieldComponent,
    PassFieldComponent
  ]
})
export class SharedComponentsModule { }
