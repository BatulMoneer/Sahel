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

@NgModule({
  declarations: [
    ChThePOfMThePComponent,
    AddNewProductComponent,
    EditProductComponent,
    CustomerViewProductsComponent,
    CustomerItemDetailComponent,
    CustomerCartComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedComponentsModule,

  ]
})
export class ProductsModule { }
