import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { ItemList } from 'src/app/shared/models/item-listing.model';
import { Item } from '../../../shared/models/item.model';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  categoryList:{sectionName: string, categories: Category[]};
  topProducts: ItemList;
  dealProducts: ItemList;

  constructor(private appService: AppService) {
    this.appService.getDealItems().subscribe((dealProducts:Item[]) => {
      this.dealProducts = {
        sectionName: "Deal of the Day",
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

}
