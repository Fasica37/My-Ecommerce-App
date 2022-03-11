import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from '../customer/customer-service.service';
import { Customer} from '../customer/customer.object';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customers :Customer[]= [];
  selectedCustomer = new Customer();
  newCustomer = new Customer();

  constructor(private route: Router, private routeA: ActivatedRoute, private customerService: CustomerServiceService){ }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(
      data => { this.customers = data; this.routeA.params.subscribe(
        param => {
          for (let customer of this.customers){
            if (customer.id == param['id']){ this.selectedCustomer = customer; }}
  }   		
      );}
    );

    
   }

   updateCustomer(){
    this.customerService.updateCustomers(this.selectedCustomer.id, this.newCustomer).subscribe(data=>{this.customerService.getCustomers().subscribe(
      data => {this.customers = data}
      );
      this.route.navigateByUrl('customers');}
          );
          
      }
    
    }
