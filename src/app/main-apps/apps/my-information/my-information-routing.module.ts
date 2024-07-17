import { CustomerMyInformationComponent } from './customer-my-information/customer-my-information.component';
import { ManagerMyInformationComponent } from './manager-my-information/manager-my-information.component';
import { StoreMyInformationComponent } from './store-my-information/store-my-information.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app-store-my-information',
    component: StoreMyInformationComponent
  },

  {
    path: 'app-manager-my-information',
    component: ManagerMyInformationComponent
  },
  {
    path: 'app-customer-my-information',
    component: CustomerMyInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyInformationRoutingModule { }
