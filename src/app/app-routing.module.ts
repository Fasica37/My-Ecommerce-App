import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CustomerComponent } from './customer/customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { EditProductComponentComponent } from './edit-product-component/edit-product-component.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'products/edit/:id',
component: EditProductComponentComponent
},
{path: 'products',
component: ProductComponent
},{path: 'products/add',
component: AddProductComponent
},{path: 'customers',
component: CustomerComponent
},{
  path: 'customers/edit/:id',
  component:  EditCustomerComponent
},{
  path: 'customers/add',
  component: AddCustomerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
