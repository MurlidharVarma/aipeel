import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemHorizontalListingComponent } from './components/item-horizontal-listing/item-horizontal-listing.component';
import { CartItemCardComponent } from './components/cart-item-card/cart-item-card.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryItemListingComponent } from './components/category-item-listing/category-item-listing.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemQuantityComponent } from './components/item-quantity/item-quantity.component';
import { CONFIG, CONFIG_OBJ } from '../config';



@NgModule({
  declarations: [
    ItemCardComponent, 
    ItemHorizontalListingComponent,
    CategoryItemComponent,
    CategoryItemListingComponent,
    CartItemCardComponent,
    ItemDetailComponent,
    ItemQuantityComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ItemCardComponent, 
    ItemHorizontalListingComponent,
    CategoryItemComponent,
    CategoryItemListingComponent,
    CartItemCardComponent,
    ItemDetailComponent,
    ItemQuantityComponent
  ],
})
export class SharedModule { }
