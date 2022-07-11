import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
//injecter le service ActivatedRoute sous le nom de ac
  constructor(private ac:ActivatedRoute, private ps:ProductService) { 
    //injecter les services
  }

  ngOnInit(): void {
    //initiliser les attributs
    //exemple: snapshot
   // console.log(this.ac.snapshot.params.id);
    //exemple : paramMap
    this.ac.paramMap.subscribe(res=>console.log(res));
    this.ps.getDetails();
  }

}
