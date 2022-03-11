import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product} from '../product/product.object';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-edit-product-component',
  templateUrl: './edit-product-component.component.html',
  styleUrls: ['./edit-product-component.component.css']
})
export class EditProductComponentComponent implements OnInit {

  products : Product[] = []; 
selectedProduct = new Product(); 
newProduct = new Product();

  constructor(private route: Router, private routeA: ActivatedRoute, private productService: ProductService){ }


  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data => { this.products = data; this.routeA.params.subscribe(
        param => {
          for (let product of this.products){
            if (product.id == param['id']){ this.selectedProduct = product; }}
  }   		
      );}
    );

    
   }
   updateProduct(){
    this.productService.updateProducts(this.selectedProduct.id, this.newProduct).subscribe(data=>{this.productService.getProducts().subscribe(
      data => {this.products = data}
    );
  this.route.navigateByUrl('products');}
      );
      
  }

}
