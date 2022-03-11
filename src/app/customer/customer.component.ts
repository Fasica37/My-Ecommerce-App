import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from './customer-service.service';
import { Customer } from './customer.object';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers :Customer[]= [];

  constructor(private router: Router, private customerService: CustomerServiceService){ }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(
      data => {this.customers = data}
    );
    
  }
  editCustomer(id: number){
    this.router.navigateByUrl('customers/edit/' +id);
  }

  removeCustomer(id: number){
    this.customerService.removeCustomers(id).subscribe(data =>{
      this.customerService.getCustomers().subscribe(
        data => {this.customers = data}
      );
    });
  
  }
  addCustomer(){
    this.router.navigateByUrl('customers/add' );
  }

}
