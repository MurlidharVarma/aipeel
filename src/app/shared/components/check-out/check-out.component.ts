import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { CONFIG_OBJ } from 'src/app/config';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {

  appName:string;
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
  
  constructor(private route: ActivatedRoute, private router: Router, private cartService: CartService) {
    this.appName = CONFIG_OBJ.appName;
    this.cartService.cart.subscribe((items: CartItem[]) => {
      this.items = this.cartService.getCartItems();
      this.totalItems = this.cartService.totalPrice;
      this.totalItems = this.cartService.totalItems;
    })
  }

  ngOnInit() {}

  goBack(){
    this.router.navigate([".."])
  }

  placeOrder(){
    window.location.href = "https://api.whatsapp.com/send?phone=917738115068&text=MyMessage";
    // https://api.whatsapp.com/send?phone=whatsappphonenumber&text=urlencodedtext
  }

}
