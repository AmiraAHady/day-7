import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   allProducts:any[]=[];
  constructor(private prodServ:ProductsService) { }

  ngOnInit(): void {
   this.prodServ.getAllProducts().subscribe({next:(prodData)=>{
     console.log(prodData.products);
     this.allProducts=prodData.products
     
   }})
  }

}
