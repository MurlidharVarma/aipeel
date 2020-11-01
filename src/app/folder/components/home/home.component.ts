import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { ItemList } from 'src/app/shared/models/item-listing.model';
import { Item } from '../../../shared/models/item.model';
import { AppService } from '../../../app.service';
import { FireService } from 'src/app/fire.service';
import { FormControl } from '@angular/forms';
import * as _ from 'underscore';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  categoryList:{sectionName: string, categories: Category[]};
  topProducts: ItemList;
  dealProducts: ItemList;

  itemSearchTxt: FormControl;
  items: Item[];
  originalItems: Item[];

  constructor(private appService: FireService) {
    this.itemSearchTxt = new FormControl();

    this.itemSearchTxt.valueChanges.pipe(
      switchMap(txt => this.appService.getItemsBySearchText(txt))
    ).subscribe((data: Item[]) => {
      if(data && data!=null && data.length>0){
        this.setItems(data)
      }else{
        this.setItems(null);
      }
    });
    
    this.appService.getItems().subscribe((data: Item[])=>{
      this.originalItems = data;
    })

    this.appService.getDealItems().subscribe((dealProducts:Item[]) => {
      this.dealProducts = {
        sectionName: "Hot Deals",
        items: dealProducts
      };
    });

    this.appService.getPopularItems().subscribe((topProducts:Item[]) => {
      this.topProducts = {
        sectionName: "Top Products",
        items: topProducts
      }
    });

    this.appService.getAllCategories().subscribe(data => {
      this.categoryList = {
          sectionName: "Shop by Category",
          categories: data
        }
    });
  }

  ngOnInit() {

  }

  setItems(itms: Item[]){
    setTimeout(()=>{
      this.items = itms;
    })
  }

}
