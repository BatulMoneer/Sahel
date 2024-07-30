import { SharedComponentsModule } from './../shared-components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StoreSignupComponent } from './store-signup/store-signup.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { CollectorSignupComponent } from './collector-signup/collector-signup.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AccountTypeComponent } from './account-type/account-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgOtpInputModule } from 'ng-otp-input';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerViewProductsComponent } from './customer-view-products/customer-view-products.component';
import { CustomerItemDetailComponent } from './customer-item-detail/customer-item-detail.component';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    StoreSignupComponent,
    CustomerSignupComponent,
    CollectorSignupComponent,
    HeaderComponent,
    FooterComponent,
    AccountTypeComponent,
    CustomerHomeComponent,
    CustomerViewProductsComponent,
    CustomerItemDetailComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgOtpInputModule
  ]
})
export class AuthModule { }
