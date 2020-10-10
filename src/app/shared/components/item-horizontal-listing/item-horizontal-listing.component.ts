import { Component, Input, OnInit } from '@angular/core';
import { ItemList } from '../../models/item-listing.model';

@Component({
  selector: 'app-item-horizontal-listing',
  templateUrl: './item-horizontal-listing.component.html',
  styleUrls: ['./item-horizontal-listing.component.scss'],
})
export class ItemHorizontalListingComponent implements OnInit {

  @Input("items")
  itemList: ItemList;

  constructor() { }

  ngOnInit() {}

}
