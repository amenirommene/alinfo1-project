import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  //configurer ma route
 // {path : "", redirectTo:"products", pathMatch:"full"},
  { path:"", component:ProductsComponent},
  //route paramétrée: path param
  { path:"product/:id", component:ProductComponent},
  { path:"customers", component:CustomersComponent},
  { path:"test", component:TestComponent},
  { path:"products", component:ProductsComponent, children:[
    {path:"test", component:TestComponent, children:[]}
  ]},
  {path:"**", component: NotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //forChild
  exports: [RouterModule]
})
export class AppRoutingModule { }
