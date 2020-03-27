import { Component, OnInit } from '@angular/core';
// import {data} from '../MockData';
import {Product} from '../Product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[];
  selected:Product;
  constructor(
    private productService: ProductService
  ) { }
  ngOnInit() {
    this.getproducts();
  }
  showDetail(product){
    this.selected=product;
    // console.log(this.selected);
  }
  getproducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    })
  // this.products=this.productService.getProducts();
  // console.log(this.products);
  }
}