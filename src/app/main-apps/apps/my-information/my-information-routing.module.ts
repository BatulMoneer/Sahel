import { CollectorMyInformationComponent } from './collector-my-information/collector-my-information.component';
import { CollectorRecieptDetailsComponent } from './collector-reciept-details/collector-reciept-details.component';
import { CollectorRequestWalletComponent } from './collector-request-wallet/collector-request-wallet.component';
import { CollectorViewPaymentsComponent } from './collector-view-payments/collector-view-payments.component';
import { CollectorViewRecieptsComponent } from './collector-view-reciepts/collector-view-reciepts.component';
import { CustomerMyInformationComponent } from './customer-my-information/customer-my-information.component';
import { EditCollectorInformationComponent } from './edit-collector-information/edit-collector-information.component';
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
  },
  {
    path: 'app-collector-my-information',
    component: CollectorMyInformationComponent
  },
  {
    path: 'app-collector-edit-information',
    component: EditCollectorInformationComponent
  },
  {
    path: 'app-collector-view-reciepts',
    component: CollectorViewRecieptsComponent
  },
  {
    path: 'app-collector-view-payments',
    component: CollectorViewPaymentsComponent
  },
  {
    path: 'app-collector-request-wallet',
    component: CollectorRequestWalletComponent
  }
  ,
  {
    path: 'app-collector-reciept-details',
    component: CollectorRecieptDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyInformationRoutingModule { }
