import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemList } from '../shared/models/item-listing.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getHomeData():Observable<ItemList[]>{
    const products = [
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

    const topProducts:ItemList = {
      sectionName: "Top Products",
      items: products
    }

    const dealProducts:ItemList = {
      sectionName: "Deal of the Day",
      items: products
    }

    return of([topProducts, dealProducts])
  }
}
