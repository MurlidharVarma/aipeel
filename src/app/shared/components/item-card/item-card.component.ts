import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/shared/models/item.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {

  @Input("item")
  item: Item;

  imagePrefix: string;

  constructor(private router: Router) { 
    this.imagePrefix = environment.imagePrefix;
  }

  ngOnInit() {}

  navigateToDetails(){
    this.router.navigate(['/itemDetails', this.item.id], {state: this.item});
  }
}
