import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, empty, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from './shared/models/category.model';
import { Item } from './shared/models/item.model';
import * as _ from 'underscore';
import { Order } from './shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class FireService {
  categories$: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>(null);
  items$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(null);

  constructor(private firestore: AngularFirestore) {
    this.initialize();
  }

  /***********************FIRE STORE - START *****************/

  initialize(){
    this.getAllCategoriesFromFB().subscribe((data:Category[]) => {
      this.categories$.next(data);
    });

    this.getAllItemsFromFB().subscribe((data:Item[]) => {
      this.items$.next(data);
    })
  }

  getAllCategoriesFromFB(): Observable<Category[]>{
    return this.firestore.collection<Category>("categories").valueChanges();
  }

  getAllItemsFromFB(): Observable<Item[]>{
    return this.firestore.collection<Item>("items").valueChanges();
  }

  saveOrder(order: Order){
    return this.firestore.collection("orders").doc(order.orderId).set(order, {merge: true});
  }

  saveAccount(acc){
    return this.firestore.collection("account").doc(acc.email).set(acc, {merge: true});
  }

  getAccountInfo(email){
    return this.firestore.collection("account").doc(email).valueChanges();
  }
  /***********************FIRE STORE - END *****************/

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
