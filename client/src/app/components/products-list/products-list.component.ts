import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(public productsService:ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe((res)=>{
      console.log(res);
      
    })
  }

}
