import { Injectable } from '@angular/core';
import {Product} from './Product';
import {data} from './MockData';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ProductService {
  api = 'https://5e7dce69fa19eb001651a052.mockapi.io/product';
  // products = data;
  constructor(
    private http : HttpClient
  ) { }

  getProducts(): Observable<Product[]>{//lays ds sp
    return this.http.get<Product[]>(this.api);
    // return this.products;
    // console.log(this.products);
  }
  getProduct(id){//chi tiet sp
  // console.log(id)
  return this.products.find(product => product.id == id);
  }

  addProduct(product){
    // this.products.push(product);
    // console.log(product);
    // let newOj={id:6, ...product}
    // console.log(newOj);
  }
}