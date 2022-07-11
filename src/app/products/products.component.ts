import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title : string;
  listproducts: Product[];
  price : number = 0;
  constructor(private pservice:ProductService) { 
  }

  ngOnInit(): void {
    this.title="titre"; 
   // this.listproducts = this.pservice.getAllProducts();
   this.pservice.getAllProductsFromServer().subscribe(res=>this.listproducts=res);
    //initiliser les propriétés du composants
  }
  like(i:number){
    console.log(this.listproducts[i]);
     this.listproducts[i].like +=1;
  }
  buy(p:Product){
    p.quantity -=1;
}
}
