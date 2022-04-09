import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartOrder } from '../common/cart-order';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  orders: CartOrder[]=[];
  totalOrders: Subject<number> = new Subject<number>();
  totalPrice: Subject<number> = new Subject<number>();
  constructor() { }

  addOrderToCart(order: CartOrder){
    let isExist : boolean = false;
    
    let existOrder:any =undefined;
    if (this.orders.length>0){
      /*for(let temp of this.orders){
        if (temp.id === order.id){
          existOrder = temp;
          break;
        }
      }*/
    }
    existOrder= this.orders.find(temp => temp.id === order.id);

    isExist= (existOrder != undefined); //true ou false
    if(isExist){ //true (order exist)
      existOrder.quantity++;
    } else{ // false (order vide)
      this.orders.push(order);
    }
    console.log(this.orders)
    this.calculateTotals()
  }
  calculateTotals() {
    let totalPriceOrder:number=0;
    let totalElementSizeOrder:number =0;
    for (let temp of this.orders){
      totalElementSizeOrder += temp.quantity; 
      totalPriceOrder += temp.quantity * temp.prix;
    }
    this.totalPrice.next(totalPriceOrder) ;
    this.totalOrders.next(totalElementSizeOrder);
    console.log("price= " + this.totalPrice)
    console.log("size= "+ this.totalOrders )
  }
  
}

