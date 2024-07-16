import { StoreSignupComponent } from './store-signup/store-signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { CollectorSignupComponent } from './collector-signup/collector-signup.component';

const routes: Routes = [
  {

    path : 'login',
    component : LoginComponent
  },
  {
    path : 'logout',
    component : LogoutComponent
  },
  {
    path : 'not-found',
    component : NotFoundComponent
  },
  {
    path : 'storeSignup',
    component : StoreSignupComponent
  },
  {
    path : 'customerSignup',
    component : CustomerSignupComponent
  },
  {
    path : 'collectorSignup',
    component : CollectorSignupComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
