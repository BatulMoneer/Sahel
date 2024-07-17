import { StoreHomeComponent } from './store-home/store-home.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'app-store-home',
    component: StoreHomeComponent
  },
  {path: 'app-manager-home',
    component: ManagerHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
