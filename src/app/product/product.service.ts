import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './product.object';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpRequest: HttpClient) { }

  getProducts(): Observable<any>{
    return this.httpRequest.get('https://622b0abb14ccb950d22d1060.mockapi.io/Product');
}

removeProducts(id: number): Observable<any>{
  return this.httpRequest.delete('https://622b0abb14ccb950d22d1060.mockapi.io/Product/'+id);
}

updateProducts(id: number, product: Product): Observable<any>{
  return this.httpRequest.put('https://622b0abb14ccb950d22d1060.mockapi.io/Product/'+id, product);
}



}
