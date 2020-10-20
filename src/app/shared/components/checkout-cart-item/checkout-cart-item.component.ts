import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { environment } from 'src/environments/environment';
import { CartItem } from '../../models/cart-item';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-checkout-cart-item',
  templateUrl: './checkout-cart-item.component.html',
  styleUrls: ['./checkout-cart-item.component.scss'],
})
export class CheckoutCartItemComponent implements OnInit {

  @Input("item")
  cartItem: CartItem;

  quantity: number;
  
  imagePrefix: string;
  constructor(private router: Router, private cartService: CartService) {
    this.imagePrefix = environment.imagePrefix;
  }

  ngOnInit() {
    setTimeout(()=> {
      this.quantity = this.cartItem.quantity;
    });
  }

  updateQuantity(qty){
    this.cartItem.quantity = qty?qty:0;
    this.quantity = this.cartItem.quantity;
    this.cartItem.price = (this.cartItem.quantity * (this.cartItem.item.price?this.cartItem.item.price:0));
    this.cartService.updateCartItem(this.cartItem);
  }

  deleteItemFromCart(){
    this.cartService.deleteCartItem(this.cartItem);
  }
}
