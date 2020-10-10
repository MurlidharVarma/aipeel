import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  products: Item[];
  constructor() {
    this.products = [
      {
        name: "Potatoes",
        price: 30,
        unit: "per kg",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      },
      {
        name: "Tomatoes",
        price: 35,
        unit: "per kg",
        image: "https://images.unsplash.com/photo-1524593166156-312f362cada0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      },
      {
        name: "Onions",
        price: 50,
        unit: "per kg",
        image: "https://images.unsplash.com/photo-1508747703725-719777637510?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
      }
    ]
  }

  ngOnInit() {}

}
