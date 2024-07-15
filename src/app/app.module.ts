import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CartComponent } from './main-apps/cart/cart.component';
import { HomeComponent } from './main-apps/home/home.component';
import { AccountComponent } from './main-apps/account/account.component';
import { ItemCardComponent } from './shared-components/item-card/item-card.component';
import { GreenButtonComponent } from './shared-components/green-button/green-button.component';
import { PinkButtonComponent } from './shared-components/pink-button/pink-button.component';
import { ShopCardComponent } from './shared-components/shop-card/shop-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    HomeComponent,
    AccountComponent,
    ItemCardComponent,
    GreenButtonComponent,
    PinkButtonComponent,
    ShopCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
