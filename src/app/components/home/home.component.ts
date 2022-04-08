import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currency: String = '';
  products: Product[]=[];
  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.finalProducts();
   
  }

  finalProducts(){
    let result= this.route.snapshot.paramMap.has('id');
   // alert (result);
    if (result){
      this.listProductsByCategoryId();
    }
    else{
      this.listProducts();
    }

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
}
