import { Component, Input, OnInit } from '@angular/core';
import { CategoryList } from '../../models/category-list.model';

@Component({
  selector: 'app-category-item-listing',
  templateUrl: './category-item-listing.component.html',
  styleUrls: ['./category-item-listing.component.scss'],
})
export class CategoryItemListingComponent implements OnInit {


  @Input("categories")
  categoryList: CategoryList;

  constructor() { }

  ngOnInit() {}

}
