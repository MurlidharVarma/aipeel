import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemHorizontalListingComponent } from './components/item-horizontal-listing/item-horizontal-listing.component';



@NgModule({
  declarations: [ItemCardComponent, ItemHorizontalListingComponent],
  imports: [
    CommonModule
  ],
  exports:[ItemCardComponent, ItemHorizontalListingComponent]
})
export class SharedModule { }
