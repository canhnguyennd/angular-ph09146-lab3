import { Component, OnInit } from '@angular/core';
import {Data} from '../MockData';
import {Product} from '../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products=Data;
  selected:Product;
  showDetail(product){
    this.selected=product;
    console.log(this.selected);
  }
}