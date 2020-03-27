import { Injectable } from '@angular/core';
import {Product} from './Product';
import {data} from './MockData';

@Injectable()
export class ProductService {
  products = data;
  constructor() { }

  getProducts(){//lays ds sp
    return this.products;
    // console.log(this.products);
  }
  getProduct(id){//chi tiet sp
  console.log(id)
  return this.products.find(product => product.id == id);
  }

  addProduct(product){
    this.products.push(product);
    // console.log(product);
    // let newOj={id:6, ...product}
    // console.log(newOj);
  }
}