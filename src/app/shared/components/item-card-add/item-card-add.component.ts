import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private router: Router) { 
  }

  ngOnInit() {}

  updateQuantity(qty){
    this.qty = qty?qty:0;
    this.totalPrice = (this.qty * (this.item.price?this.item.price:0));
  }
}
