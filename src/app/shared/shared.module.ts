import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './components/item-card/item-card.component';



@NgModule({
  declarations: [ItemCardComponent],
  imports: [
    CommonModule
  ],
  exports:[ItemCardComponent]
})
export class SharedModule { }
