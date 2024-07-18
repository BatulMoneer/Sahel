import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./apps/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'my-information',
    loadChildren: () => import('./apps/my-information/my-information.module').then(m => m.MyInformationModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./apps/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'alerts',
    loadChildren: () => import('./apps/alerts/alerts.module').then(m => m.AlertsModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./apps/requests/requests.module').then(m => m.RequestsModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppsRoutingModule { }
