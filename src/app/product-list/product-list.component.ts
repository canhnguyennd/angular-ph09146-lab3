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
    private abc: ProductService
  ) { }
  ngOnInit() {
    this.getproducts;
  }
  showDetail(product){
    this.selected=product;
    // console.log(this.selected);
  }
  getproducts(){
  this.products=this.abc.getProducts();
  }
}