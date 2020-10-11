import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { Category } from './shared/models/category.model';
import { ItemList } from './shared/models/item-listing.model';
import { Item } from './shared/models/item.model';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAllCategories() :Observable<Category[]>{
    return this.http.get<Category[]>("assets/mocks/categories.mock.json");
  }

  getPopularItems(): Observable<Item[]>{
    return this.http.get<Item[]>("assets/mocks/items.mock.json").pipe(
      map(data =>{
        return _.filter(data, e => e['tags'].indexOf("popular") != -1);
      })
    )
  }

  getDealItems(): Observable<Item[]>{
      return this.http.get<Item[]>("assets/mocks/items.mock.json").pipe(
        map(data =>{
          return _.filter(data, e => e['tags'].indexOf("deal") != -1);
        })
      )
  }

  getCategoryItemsById(categoryId: string): Observable<Item[]>{
    return this.http.get<Item[]>("assets/mocks/items.mock.json").pipe(
      // map(data =>{
      //   return _.filter(data, e => e.categoryId == categoryId);
      // })
    )
  }
}
