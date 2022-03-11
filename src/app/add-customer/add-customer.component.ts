import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer/customer.object';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customers :Customer[]= [];
  id: number;
  
    constructor(private route: Router){
      this.id = 0;
     }

  ngOnInit(): void {
  }

  addCustomer(customer: any){
    this.id = this.customers.length + 1;
    let newCustomer = {id: this.id, name: customer.name, imageUrl: customer.imageUrl, gender: customer.gender, email: customer.email }
    this.customers.push(newCustomer);
    this.route.navigateByUrl('customers');
  }

}
