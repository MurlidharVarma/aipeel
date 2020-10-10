import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../shared/models/category.model';
import { ItemList } from '../shared/models/item-listing.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getHomeData():Observable<any>{
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

    const categories: Category[] = [
      {
        name: "Vegetable",
        image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1626&q=80"
      },
      {
        name: "Fruits",
        image: "https://images.unsplash.com/photo-1600626333392-59a20e646d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      },
      {
        name: "Snacks",
        image: "https://images.unsplash.com/photo-1598401575995-dcdbbebe55b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      },
      {
        name: "Masala",
        image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      },
      {
        name: "Grains",
        image: "https://images.unsplash.com/photo-1562525922-cde78e2119f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      }
    ];

    const homeData = {
      itemList: [topProducts, dealProducts],
      categoryList: {
        sectionName: "Shop by Category",
        categories: categories
      }
    }
    return of(homeData);
  }
}
