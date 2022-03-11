import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, PRODUCTS } from '../product/product.object';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  products = PRODUCTS; 
  id: number;
  
    constructor(private route: Router){
      this.id = 0;
     }

  ngOnInit(): void {
  }

  addProduct(product: any){
    this.id = this.products.length;
    let newProduct = {id: this.id, name: product.name, imageUrl: product.imageUrl, price: product.price, description: product.description }
    this.products.push(newProduct);
    this.route.navigateByUrl('products');
  }

}
