import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from '../customer/customer-service.service';
import { Customer } from '../customer/customer.object';
import { AddCustomerServiceService } from './add-customer-service.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customers :Customer[]= [];
  id: number;
  
    constructor(private route: Router, private addCustomerService: AddCustomerServiceService, private customerService: CustomerServiceService){
      this.id = 0;
     }

  ngOnInit(): void {
  }

  addCustomer(customer: any){
    this.id = this.customers.length + 1;
    let newCustomer = {id: this.id, name: customer.name, avatar: customer.avatar, gender: customer.gender, email: customer.email }
    this.addCustomerService.addCustomers(newCustomer).subscribe(
      );
      this.customerService.getCustomers().subscribe(
        data => {this.customers = data}
      );
    this.route.navigateByUrl('customers');
  }

}
