import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONFIG_OBJ } from '../../../config';
import { AppService } from '../../../app.service';
import { Category } from '../../models/category.model';
import { Item } from '../../models/item.model';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-category-item-detail',
  templateUrl: './category-item-detail.component.html',
  styleUrls: ['./category-item-detail.component.scss'],
})
export class CategoryItemDetailComponent implements OnInit {

  appName:string;
  category: Category;
  items: Item[];
  
  constructor(private route: ActivatedRoute, private router: Router, private appService: FireService) {
    this.appName = CONFIG_OBJ.appName;
  }

  ngOnInit() {
    this.category = history.state;

    if(this.category && this.category!=null){
      this.appService.getCategoryItemsById(this.category.categoryId).subscribe((data: Item[]) => {
        this.items = data;
      })
    }
  }

  goBack(){
    this.router.navigate([".."])
  }

}
