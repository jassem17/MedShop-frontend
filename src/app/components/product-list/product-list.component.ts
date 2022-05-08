import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartOrder } from 'src/app/common/cart-order';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  currency: String = '';
  products: Product[]=[];
  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService : CartServiceService,
              private router:Router) { }

  ngOnInit() {

    this.finalProducts();
   
  }

  finalProducts(){
    let result1= this.route.snapshot.paramMap.has('id');
    let result2= this.route.snapshot.paramMap.has('key');
    
   // alert (result);
    if (result1){
      this.listProductsByCategoryId();
    }
    else if (result2){
      this.listProductsByKey();
    }
    else{
      this.listProducts();
    }

  }
  listProductsByKey() {
    let keyWord = this.route.snapshot.paramMap.get('key');
    this.productService.getProductListByKey(keyWord).subscribe(
      data => {
        this.products=data;
      }
    )

  }

  listProducts() {
    
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

  listProductsByCategoryId(){

    let idCategory = this.route.snapshot.paramMap.get('id');

    //alert (idCategory);

    this.productService.getProductListByCategoryId(idCategory).subscribe(
      data => {
        this.products=data;
      }
    )
  }
  addToCart(temp:Product){
    const cartorder = new CartOrder(temp);
    this.cartService.addOrderToCart(cartorder);
  }
  redirect(id:any)
  {
this.router.navigate(['product-detail',id])
  }
}

  





