import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../product/product.object';

@Injectable({
  providedIn: 'root'
})
export class AddProductServiceService {

  constructor(private httpRequest: HttpClient) { }
  addProducts(product:Product): Observable<any>{
    return this.httpRequest.post('https://622b0abb14ccb950d22d1060.mockapi.io/Product',product)
  }
}
