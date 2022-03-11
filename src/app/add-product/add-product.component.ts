import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product} from '../product/product.object';
import { ProductService } from '../product/product.service';
import { AddProductServiceService } from './add-product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  products: Product[] = []; 
  id: number;
  
    constructor(private route: Router, private addProductService: AddProductServiceService, private productService: ProductService){
      this.id = 0;
     }

  ngOnInit(): void {
    console.log(this.products);
  }

  addProduct(product: any){
    this.id = this.products.length + 1;
    let newProduct = {id: this.id, name: product.name, avatar: product.avatar, price: product.price, description: product.description }
 
   this.addProductService.addProducts(newProduct).subscribe(
  );
  this.productService.getProducts().subscribe(
    data => {this.products = data}
  );
    this.route.navigateByUrl('products');
  }

  

}
