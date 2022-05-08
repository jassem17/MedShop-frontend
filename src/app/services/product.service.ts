import { Product } from './../common/product';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api";
  //private baseUrl = "http://localhost:8080/api/products";
  //private url = "http://localhost:8080/api/products/category"
  constructor(private http: HttpClient) { }

  getProductList( ) : Observable<Product[]>{
    

    return this.http.get<Product[]>(`${this.baseUrl}/products`).pipe(
      map(
        response =>response
      )
      )
    };
    
  getProductListByCategoryId(id: any):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/category?id=${id}`).pipe(
      map(
        response => response
      )
    )
  }
  getProductListByKey(word: any):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/productkey?word=${word}`).pipe(
      map(
        response => response
      )
    )
  }
  getProductById(id:any) : Observable<any>
  {
    return this.http.get("http://localhost:8080/api/get?id="+id)
  }
  }
 

  



