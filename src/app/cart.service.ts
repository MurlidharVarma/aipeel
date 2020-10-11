import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './shared/models/cart-item';
import * as _ from 'underscore';
import { Order } from './shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  totalPrice: number;
  totalItems: number;
  cart: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>(null);

  constructor() { }

  /**
   * Get Cart items
   */
  getCartItems() : CartItem[]{
    return this.cart.getValue();
  }

  /**
   * Set Cart Items
   * @param cartItems CartItem[]
   */
  setCartItems(cartItems: CartItem[]): void{

    // if there exits cart items
    if(cartItems && cartItems != null && cartItems.length>0){
      this.totalPrice = _.reduce(cartItems, (acc, e)=> { acc+=(e.price?e.price:0); return acc}, 0);
      this.totalItems = cartItems.length;
      this.cart.next(cartItems);
    }else{
      this.totalPrice = 0;
      this.totalItems = 0;
      this.cart.next(null);
    }
  }

  /**
   * Update Item to cart
   * @param item CartItem
   */
  updateCartItem(item: CartItem){
    let cartItems: CartItem[] = this.getCartItems();

    //if empty initialize
    if (!(cartItems && cartItems!=null)){
      cartItems = [];
    }

    // add item
    if(item && item!=null){

      let isAlreadyExistingItem = false;
      let cartSize = cartItems.length;

      // check if the item already exists in cart
      for(let idx=0; idx < cartSize; idx++){
        let cartItem = cartItems[idx];
        if(cartItem.item.id == item.item.id){
          cartItems[idx] = item;
          isAlreadyExistingItem = true;
          break;
        }
      }

      // if item doesnt exists then push the new item to cart
      if(!isAlreadyExistingItem){
        cartItems.push(item);
      }

      //update Cart
      this.setCartItems(cartItems)
    }

  }


  deleteCartItem(item: CartItem){
    let cartItems: CartItem[] = this.getCartItems();
    
    // remove the item
    cartItems = _.reject(cartItems, (e: CartItem) => e.item.id == item.item.id);

    //update the cart
    this.setCartItems(cartItems);
  }
}
