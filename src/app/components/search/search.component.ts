import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  //products : Product[]=[];
  constructor(private productService: ProductService,
              private router : Router) { }

  ngOnInit(): void {
  }
  doSearch(value: any){
    this.router.navigateByUrl('/product-list/'+value);
    
    /*this.productService.getProductListByKey(value).subscribe(
      data =>(
        this.products=data
      )
    );         a rejeté    */
      

  }

}
