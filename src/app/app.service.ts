import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, empty, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { Category } from './shared/models/category.model';
import { ItemList } from './shared/models/item-listing.model';
import { Item } from './shared/models/item.model';
import * as _ from 'underscore';
import { Order } from './shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  categories$: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>(null);
  items$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(null);

  constructor(private http: HttpClient) {
    this.initialize();
  }

  /*********************** MOCK FIRE STORE - START *****************/

  initialize(){
    this.getAllCategoriesFromFB().subscribe((data:Category[]) => {
      this.categories$.next(data);
    });

    this.getAllItemsFromFB().subscribe((data:Item[]) => {
      this.items$.next(data);
    })
  }

  getAllCategoriesFromFB(): Observable<Category[]>{
    return this.http.get<Category[]>("assets/mocks/categories.mock.json");
  }

  getAllItemsFromFB(): Observable<Item[]>{
    return this.http.get<Item[]>("assets/mocks/items.mock.json");
  }

  saveOrder(order: Order){
    return empty;
  }

  saveAccount(acc){
    return empty;
  }

  getAccountInfo(email){
    return empty;
  }
  /***********************MOCK FIRE STORE - END *****************/

  getAllCategories(): Observable<Category[]>{
    return this.categories$;
  }

  getPopularItems(): Observable<Item[]>{
    return this.items$.pipe(
      map(data =>{
        return _.filter(data, e => e.isPopular);
      })
    )
  }

  getDealItems(): Observable<Item[]>{
    return this.items$.pipe(
      map(data =>{
        return _.filter(data, e => e.isHotDeal);
      })
    )
  }

  getCategoryItemsById(categoryId: string): Observable<Item[]>{
    return this.items$.pipe(
      map(data =>{
        return _.filter(data, e => e.categoryId == categoryId);
      })
    )
  }

  getItems():Observable<Item[]>{
    return this.items$;
  }

  getItemsBySearchText(searchTxt: string){
    let search = (searchTxt && searchTxt!=null)? searchTxt.trim().toLowerCase(): null;
    if(search && search !=null){
      return this.items$.pipe(
        map(data => {
          return _.filter(data, (e: Item) => e.name.toLowerCase().indexOf(search) != -1);
        })
      )
    }else{
      return of(null);
    }
  }
}
