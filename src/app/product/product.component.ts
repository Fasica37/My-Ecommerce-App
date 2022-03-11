import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product} from './product.object';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

products: Product[] = [];

constructor(private router: Router, private productService: ProductService){ }

ngOnInit(): void {
  this.productService.getProducts().subscribe(
    data => {this.products = data}
  );
  
}

  editProduct(id: number){
    this.router.navigateByUrl('/products/edit/' + id); 
}
removeProduct(id: number){
  this.productService.removeProducts(id).subscribe(data =>{
    this.productService.getProducts().subscribe(
      data => {this.products = data}
    );
  });

}
  addProduct(){
    this.router.navigateByUrl('products/add' );
  }
  
}
