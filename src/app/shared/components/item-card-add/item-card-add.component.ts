import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { CartItem } from '../../models/cart-item';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-card-add',
  templateUrl: './item-card-add.component.html',
  styleUrls: ['./item-card-add.component.scss'],
})
export class ItemCardAddComponent implements OnInit {

  @Input("item")
  item: Item;

  qty: number;
  totalPrice: number;
  
  constructor(private router: Router, private cartService: CartService) { 
  }

  ngOnInit() {
    let cartItem: CartItem = this.cartService.getCartItemByItemId(this.item.id);
    if(cartItem && cartItem!=null){
      setTimeout(() => {
        this.qty = cartItem.quantity;
        this.totalPrice = (this.qty * (this.item.price?this.item.price:0));
        this.item = cartItem.item;
      });
    }
  }

  updateQuantity(qty){
    this.qty = qty?qty:0;
    this.totalPrice = (this.qty * (this.item.price?this.item.price:0));
    let cartItem: CartItem = {item: this.item, quantity: this.qty, price: this.totalPrice};
    this.cartService.updateCartItem(cartItem);
  }
}
