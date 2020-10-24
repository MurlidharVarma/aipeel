import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';
import { CfgService } from '../../cfg.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  @Input("item")
  item: Item;

  originalPrice:number;

  constructor(private cfgService: CfgService) {}

  ngOnInit() {
    this.originalPrice = this.item.price;
  }

  savePrice(event){
    if(this.originalPrice != this.item.price){
      this.cfgService.update(this.item);
      this.originalPrice = this.item.price;
    }
  }
}
