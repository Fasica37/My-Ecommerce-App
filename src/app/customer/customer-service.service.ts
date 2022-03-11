import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from './customer.object';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private httpRequest: HttpClient) { }

  getCustomers(): Observable<any>{
    return this.httpRequest.get('https://622b0abb14ccb950d22d1060.mockapi.io/customer');
}

removeCustomers(id: number): Observable<any>{
  return this.httpRequest.delete('https://622b0abb14ccb950d22d1060.mockapi.io/customer/'+id);
}

updateCustomers(id: number, customer: Customer): Observable<any>{
  return this.httpRequest.put('https://622b0abb14ccb950d22d1060.mockapi.io/customer/'+id, customer);
}
}
