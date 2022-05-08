import { Component, OnInit } from '@angular/core';
import { CartOrder } from 'src/app/common/cart-order';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  orders :CartOrder[]=[];
  constructor(private cart: CartServiceService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }
  getAllOrders(){
    this.orders = this.cart.orders;
  }
  addOrder(order: CartOrder){
    this.cart.addOrderToCart(order);
  }
  removeOrder(temp: CartOrder) {
    this.cart.removeOrder(temp)
  }
  remove(temp: CartOrder) {
    this.cart.remove(temp)
  }
}