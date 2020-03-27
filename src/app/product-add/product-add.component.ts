import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product : Product = new Product();

  constructor() { }

  ngOnInit() {
  }
  addProduct(){
    console.log(this.product);
  }

}