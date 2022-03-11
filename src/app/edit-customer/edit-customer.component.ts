import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CUSTOMERS } from '../customer/customer.object';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customers = CUSTOMERS;
  selectedCustomer = new Customer();
  newCustomer = new Customer();

  constructor(private route: Router, private routeA: ActivatedRoute){ }

  ngOnInit(): void {
    this.routeA.params.subscribe(
      param => {
        for (let customer of this.customers){
          if (customer.id == param['id']){ this.selectedCustomer = customer; }}
          console.log(this.selectedCustomer)
}   		
    );
   }

   updateCustomer(){
    this.selectedCustomer.name = this.newCustomer.name;
    this.selectedCustomer.email = this.newCustomer.email;
    this.newCustomer = new Customer();
    this.route.navigateByUrl('customers');
  }

}
