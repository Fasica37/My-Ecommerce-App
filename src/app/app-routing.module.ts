import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CustomerComponent } from './customer/customer.component';
import { EditProductComponentComponent } from './edit-product-component/edit-product-component.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'products/edit/:id',
component: EditProductComponentComponent
},
{path: 'products',
component: ProductComponent
},{path: 'customers',
component: CustomerComponent
},{path: 'products/add',
component: AddProductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
