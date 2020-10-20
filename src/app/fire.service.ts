import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from './shared/models/category.model';
import { Item } from './shared/models/item.model';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class FireService {
  categories$: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>(null);
  items$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(null);

  constructor(private firestore: AngularFirestore) {
    this.getAllCategoriesFromFB().subscribe((data:Category[]) => {
      this.categories$.next(data);
    });

    this.getAllItemsFromFB().subscribe((data:Item[]) => {
      this.items$.next(data);
    })
  }

  /***********************FIRE STORE - START *****************/

  getAllCategoriesFromFB(): Observable<Category[]>{
    return this.firestore.collection<Category>("categories").valueChanges();
  }

  getAllItemsFromFB(): Observable<Item[]>{
    return this.firestore.collection<Item>("items").valueChanges();
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
}
