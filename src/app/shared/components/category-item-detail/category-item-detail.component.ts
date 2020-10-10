import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONFIG_OBJ } from 'src/app/config';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-item-detail',
  templateUrl: './category-item-detail.component.html',
  styleUrls: ['./category-item-detail.component.scss'],
})
export class CategoryItemDetailComponent implements OnInit {

  appName:string;
  category: Category;
  
  constructor(private route: ActivatedRoute, private router: Router) {
    this.appName = CONFIG_OBJ.appName;
  }

  ngOnInit() {
    this.category = history.state;
    console.log(this.category)
  }

  goBack(){
    this.router.navigate([".."])
  }

}
