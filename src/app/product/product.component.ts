import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, PRODUCTS } from './product.object';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

products = PRODUCTS;


constructor(private router: Router){ }

  ngOnInit(): void {
    console.log(this.products);

  }
  editProduct(id: number){
    this.router.navigateByUrl('/products/edit/' + id); // ‘id’ is called parameter
}
removeProduct(id: number){
 this.products = this.products.filter(products =>products.id != id);
 console.log(this.products);
}
  addProduct(){
    this.router.navigateByUrl('products/add' );
    console.log(this.products);
  }


}
