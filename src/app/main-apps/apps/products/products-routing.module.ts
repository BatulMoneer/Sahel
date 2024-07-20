import { EditProductComponent } from './edit-product/edit-product.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ChThePOfMThePComponent } from './ch-the-p-of-m-the-p/ch-the-p-of-m-the-p.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerViewProductsComponent } from './customer-view-products/customer-view-products.component';
import { CustomerItemDetailComponent } from './customer-item-detail/customer-item-detail.component';
import { CustomerCartComponent } from './customer-cart/customer-cart.component';
import { OrderStateComponent } from './order-state/order-state.component';
import { ChangeProductComponent } from './change-product/change-product.component';
import { CollectorOrdersComponent } from './collector-orders/collector-orders.component';
import { CollectorOrderDetailsComponent } from './collector-order-details/collector-order-details.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-ch-the-p-of-m-the-p',
    pathMatch: 'full'
  },
  {
    path: 'app-ch-the-p-of-m-the-p',
    component: ChThePOfMThePComponent
  },
  {
    path: 'app-add-new-product',
    component: AddNewProductComponent
  },
  {
    path: 'app-edit-product',
    component: EditProductComponent
  },
  {
    path: 'customer-view-products',
    component: CustomerViewProductsComponent
  },
  {
    path: 'customer-item-detail',
    component: CustomerItemDetailComponent
  },
  {
    path: 'customer-cart',
    component: CustomerCartComponent
  },
  {
    path: 'order-state',
    component: OrderStateComponent
  },
  {
    path: 'change-product',
    component: ChangeProductComponent
  },
  {
    path: 'collector-orders',
    component: CollectorOrdersComponent
  },
  {
    path: 'collector-order-details',
    component: CollectorOrderDetailsComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
