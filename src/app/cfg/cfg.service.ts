import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../shared/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CfgService {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  getAllItems(): Observable<Item[]>{
    return this.firestore.collection<Item>("items").valueChanges();
  }

  update(item: Item){
    this.firestore.collection("items").doc(item.id).set(item, {merge:true});
  }
}
