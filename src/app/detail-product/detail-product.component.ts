import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({ //decorateur de classe 
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
  //@Input() est un décorateur de propriété
  @Input() product : Product = new Product(); //c'est propriété d'entrée
  //@Output() est un décorateur de propriété
  @Output() notified = new EventEmitter<Product>();//c'est propriété de sortie

  constructor() { }

  ngOnInit(): void {
   console.log("je suis un nouveau composant");
  }
  clik(){
    this.notified.emit(this.product);
  }
}
