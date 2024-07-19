import { ManagerRepresentativeRegistrationRequestsComponent } from './manager-representative-registration-requests/manager-representative-registration-requests.component';
import { ChooseManagerRegistrationRequestsComponent } from './choose-manager-registration-requests/choose-manager-registration-requests.component';
import { ManagerTransferRequestComponent } from './manager-transfer-request/manager-transfer-request.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerStoresRegistrationRequestsComponent } from './manager-stores-registration-requests/manager-stores-registration-requests.component';

const routes: Routes = [
  {path: 'app-manager-transfer-request',
    component: ManagerTransferRequestComponent
  },
  {path: 'app-choose-manager-registration-requests',
    component: ChooseManagerRegistrationRequestsComponent
  },
  {path: 'app-manager-representative-registration-requests',
    component: ManagerRepresentativeRegistrationRequestsComponent
  },
  {path: 'app-manager-stores-registration-requests',
    component: ManagerStoresRegistrationRequestsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
