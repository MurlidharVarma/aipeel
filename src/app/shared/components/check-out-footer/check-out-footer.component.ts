import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-check-out-footer',
  templateUrl: './check-out-footer.component.html',
  styleUrls: ['./check-out-footer.component.scss'],
})
export class CheckOutFooterComponent implements OnInit {

  totalPrice: number;
  totalItems: number;

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.cart.subscribe(cart => {
      this.totalPrice = this.cartService.totalPrice;
      this.totalItems = this.cartService.totalItems;
    })
  }

  ngOnInit() {}

  navigateToCart(){
    this.router.navigate(['/checkout']);
  }
}
