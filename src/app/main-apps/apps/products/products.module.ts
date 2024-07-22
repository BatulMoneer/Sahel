import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ChThePOfMThePComponent } from './ch-the-p-of-m-the-p/ch-the-p-of-m-the-p.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CustomerViewProductsComponent } from './customer-view-products/customer-view-products.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { CustomerItemDetailComponent } from './customer-item-detail/customer-item-detail.component';
import { CustomerCartComponent } from './customer-cart/customer-cart.component';

import { ChooseProductWillUpdateItComponent } from './choose-product-will-update-it/choose-product-will-update-it.component';

import { OrderStateComponent } from './order-state/order-state.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { ChangeProductComponent } from './change-product/change-product.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CollectorOrdersComponent } from './collector-orders/collector-orders.component';
import { CollectorOrderDetailsComponent } from './collector-order-details/collector-order-details.component';


@NgModule({
  declarations: [
    ChThePOfMThePComponent,
    AddNewProductComponent,
    EditProductComponent,
    CustomerViewProductsComponent,
    CustomerItemDetailComponent,
    CustomerCartComponent,

    ChooseProductWillUpdateItComponent,

    OrderStateComponent,
    ChangeProductComponent,
    CollectorOrdersComponent,
    CollectorOrderDetailsComponent

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedComponentsModule,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule

  ]
})
export class ProductsModule { }
