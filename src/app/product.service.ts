import { Injectable } from '@angular/core';
import {Product} from './Product';
import {data} from './MockData';

@Injectable()
export class ProductService {
  products = data;
  constructor() { }

  getProducts(){
    return this.products;
    // console.log(this.products);
  }

  addProduct(product){
    this.products.push(product);
    // console.log(product);
    // let newOj={id:6, ...product}
    // console.log(newOj);
  }
}