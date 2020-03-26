import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  product : Product = {
    id:1,
    name:"item1",
    price:22.22,
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    status: true,
  }
  changestatus(){
    // console.log('1')
    this.product.status = false
  }
  changeTitle(e){
    this.product.name=e.target.value;
    // console.log(e.target.value);
  }

}