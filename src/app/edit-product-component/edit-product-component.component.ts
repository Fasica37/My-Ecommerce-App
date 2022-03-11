import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, PRODUCTS } from '../product/product.object';

@Component({
  selector: 'app-edit-product-component',
  templateUrl: './edit-product-component.component.html',
  styleUrls: ['./edit-product-component.component.css']
})
export class EditProductComponentComponent implements OnInit {

  products = PRODUCTS; 
selectedProduct = new Product(); 
newProduct = new Product();

  constructor(private route: Router, private routeA: ActivatedRoute){ }


  ngOnInit(): void {
    this.routeA.params.subscribe(
      param => {
        for (let product of this.products){
          if (product.id == param['id']){ this.selectedProduct = product; }}
          console.log(this.selectedProduct)
}   		
    );
   }
   updateProduct(){
    this.selectedProduct.name = this.newProduct.name;
    this.selectedProduct.price = this.newProduct.price;
    this.newProduct = new Product();
    this.route.navigateByUrl('products');
  }

}
