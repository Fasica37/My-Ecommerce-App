import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, PRODUCTS } from './product.object';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

product = PRODUCTS;


constructor(private router: Router){ }

  ngOnInit(): void {
    

  }
  editProduct(id: number){
    this.router.navigateByUrl('/products/edit/' + id); // ‘id’ is called parameter
}
removeProduct(id: number){
  this.product = this.product.filter(product =>product.id != id);

}


}
