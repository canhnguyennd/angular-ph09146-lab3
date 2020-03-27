import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductAddComponent} from './product-add/product-add.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path : 'add-product', component : ProductAddComponent},
  {path : 'about' , component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }