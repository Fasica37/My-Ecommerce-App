import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOMERS } from './customer.object';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers = CUSTOMERS;

  constructor(private router: Router){ }

  ngOnInit(): void {
   
  }
  editCustomer(id: number){
    this.router.navigateByUrl('customers/edit/' +id);
  }

  removeCustomer(id: number){
    this.customers = this.customers.filter(customers =>customers.id != id);
  
  }
  addCustomer(){
    this.router.navigateByUrl('customers/add' );
  }

}
