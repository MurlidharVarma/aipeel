import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { CONFIG_OBJ } from 'src/app/config';
import { CartItem } from '../../models/cart-item';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {

  appName: string;

  item: Item;
  itemId: string;
  qty: number;
  totalPrice: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private cartService: CartService) {
    this.appName = CONFIG_OBJ.appName;
  }

  ngOnInit() {
    this.item = history.state;
    let cartItem: CartItem = this.cartService.getCartItemByItemId(this.item.id);
    if(cartItem && cartItem!=null){
      setTimeout(() => {
        this.qty = cartItem.quantity;
        this.totalPrice = (this.qty * (this.item.price?this.item.price:0));
        this.item = cartItem.item;
      });
    }
  }

  goBack(){
    this.router.navigate([".."])
  }

  updateQuantity(qty){
    this.qty = qty?qty:0;
    this.totalPrice = (this.qty * (this.item.price?this.item.price:0));
    let cartItem: CartItem = {item: this.item, quantity: this.qty, price: this.totalPrice};
    this.cartService.updateCartItem(cartItem);
  }

}
