import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  //qui peut utiliser ce service? => root => tout élément de cette application
  //combien d'instance je peux créer pour ce service=> une seule instance qui tourne
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }
  getAllProducts(): Product[]{
    return [
      {id: 11, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: 22, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 33, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ];
  }

  getAllProductsFromServer():Observable<Product[]>{
   return this._http.get<Product[]>("http://localhost:3000/products");
  }
  getProductById(id:number): Observable<Product>{
    return this._http.get<Product>("http://localhost:3000/products/"+id);
  }
  addProduct(p:Product): Observable<Product>{
    return this._http.post<Product>("http://localhost:3000/products",p);
  }

  getDetails(){
    console.log("test ps");
  }
}
