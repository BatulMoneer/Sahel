import { StoreSignupComponent } from './store-signup/store-signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { CollectorSignupComponent } from './collector-signup/collector-signup.component';
import { AccountTypeComponent } from './account-type/account-type.component';
import { CheckTokenGuard } from '../guard/check-token.guard';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerViewProductsComponent } from './customer-view-products/customer-view-products.component';
import { CustomerItemDetailComponent } from './customer-item-detail/customer-item-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {

    path: 'home',
    component: CustomerHomeComponent
  },
  {

    path: 'products',
    component: CustomerViewProductsComponent
  },
  {

    path: 'details',
    component: CustomerItemDetailComponent
  },
  {

    path: 'login', canActivate: [CheckTokenGuard],
    component: LoginComponent
  },
  {
    path: 'logout', canActivate: [CheckTokenGuard],
    component: LogoutComponent
  },
  {
    path: 'notFound',
    component: NotFoundComponent
  },
  {
    path: 'storeSignup', canActivate: [CheckTokenGuard],
    component: StoreSignupComponent
  },
  {
    path: 'customerSignup', canActivate: [CheckTokenGuard],
    component: CustomerSignupComponent
  },
  {
    path: 'collectorSignup', canActivate: [CheckTokenGuard],
    component: CollectorSignupComponent
  },
  {
    path: 'accountType', canActivate: [CheckTokenGuard],
    component: AccountTypeComponent
  },

  { //must be at last, for an unexsisting page
    path: '**',
    redirectTo: 'notFound' // or design a page for it 404
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
