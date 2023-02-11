import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  myProduct:any={}
  constructor(private prodServ:ProductsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let productID=this.route.snapshot.paramMap.get('id');
    this.prodServ.getProductById(productID).subscribe({next:(singleProduct)=>{
     console.log(singleProduct.product);
     this.myProduct=singleProduct.product
     
    }})
  }

}
