import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { EditProductComponentComponent } from './edit-product-component/edit-product-component.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ProductService } from './product/product.service';
import { AddProductServiceService } from './add-product/add-product-service.service';
import { CustomerServiceService } from './customer/customer-service.service';
import { AddCustomerServiceService } from './add-customer/add-customer-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerComponent,
    EditProductComponentComponent,
    AddProductComponent,
    EditCustomerComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService, AddProductServiceService,CustomerServiceService,AddCustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
