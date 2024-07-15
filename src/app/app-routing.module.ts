import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './main-apps/cart/cart.component';
import { HomeComponent } from './main-apps/home/home.component';
import { AccountComponent } from './main-apps/account/account.component';

const routes: Routes = [
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'home',
    component:HomeComponent

  },
  {
    path:'account',
    component:AccountComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
