import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductAddComponent} from './product-add/product-add.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {path : 'add-product', component : ProductAddComponent},
  {path : 'about' , component: AboutComponent},
  {path : 'home' , component: HomeComponent},
  {path : 'products' , component: ProductListComponent},
  {path : 'product/:id' , component: ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }