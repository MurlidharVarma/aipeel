import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent implements OnInit {

  @Input("category")
  category: Category;
  
  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToCategoryDetails(){
    this.router.navigate(['/categoryItemDetail',this.category.categoryId],{state: this.category});
  }
}
