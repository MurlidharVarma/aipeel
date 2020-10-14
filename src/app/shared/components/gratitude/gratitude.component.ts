import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-gratitude',
  templateUrl: './gratitude.component.html',
  styleUrls: ['./gratitude.component.scss'],
})
export class GratitudeComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.cart.next(null);
  }

  ngOnInit() {}

  home(){
    this.router.navigate(['/folder/home']);
  }
}
