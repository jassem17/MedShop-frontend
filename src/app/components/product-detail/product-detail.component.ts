import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartOrder } from 'src/app/common/cart-order';
import { Product } from 'src/app/common/product';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: any

  product : any
  constructor(private route:ActivatedRoute,private router:Router,private service:ProductService,private cartService:CartServiceService) { }

  ngOnInit(): void {
this.id=this.route.snapshot.params['id']
this.service.getProductById(this.id).subscribe(res=>{
  this.product=res;
},err=>{
  console.log(err)
})

  }
  addToCart(temp:Product){
    const cartorder = new CartOrder(temp);
    this.cartService.addOrderToCart(cartorder);
  }

}