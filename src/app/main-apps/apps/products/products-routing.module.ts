import { EditProductComponent } from './edit-product/edit-product.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ChThePOfMThePComponent } from './ch-the-p-of-m-the-p/ch-the-p-of-m-the-p.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'app-ch-the-p-of-m-the-p',
    component: ChThePOfMThePComponent
  },
  {
    path: 'app-add-new-product',
    component: AddNewProductComponent
  },
  {
    path: 'app-edit-product',
    component: EditProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
