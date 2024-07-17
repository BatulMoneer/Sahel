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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppsRoutingModule { }
