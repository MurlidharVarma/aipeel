import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemHorizontalListingComponent } from './components/item-horizontal-listing/item-horizontal-listing.component';
import { CartItemCardComponent } from './components/cart-item-card/cart-item-card.component';



@NgModule({
  declarations: [ItemCardComponent, ItemHorizontalListingComponent, CartItemCardComponent],
  imports: [
    CommonModule
  ],
  exports:[ItemCardComponent, ItemHorizontalListingComponent, CartItemCardComponent]
})
export class SharedModule { }
