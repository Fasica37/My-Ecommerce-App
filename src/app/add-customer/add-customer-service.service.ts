import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../customer/customer.object';

@Injectable({
  providedIn: 'root'
})
export class AddCustomerServiceService {

  constructor(private httpRequest: HttpClient) { }
  addCustomers(customer:Customer): Observable<any>{
    return this.httpRequest.post('https://622b0abb14ccb950d22d1060.mockapi.io/customer',customer)
  }
}
