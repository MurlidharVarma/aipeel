import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemHorizontalListingComponent } from './components/item-horizontal-listing/item-horizontal-listing.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryItemListingComponent } from './components/category-item-listing/category-item-listing.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemQuantityComponent } from './components/item-quantity/item-quantity.component';
import { CategoryItemDetailComponent } from './components/category-item-detail/category-item-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemCardAddComponent } from './components/item-card-add/item-card-add.component';
import { CheckOutFooterComponent } from './components/check-out-footer/check-out-footer.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { CheckoutCartItemComponent } from './components/checkout-cart-item/checkout-cart-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ContactComponent } from './components/contact/contact.component';
import { NameComponent } from './components/name/name.component';
import { GratitudeComponent } from './components/gratitude/gratitude.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';



@NgModule({
  declarations: [
    ItemCardComponent, 
    ItemHorizontalListingComponent,
    CategoryItemComponent,
    CategoryItemListingComponent,
    ItemDetailComponent,
    ItemQuantityComponent,
    CategoryItemDetailComponent,
    ItemCardAddComponent,
    CheckOutFooterComponent,
    CheckOutComponent,
    CheckoutCartItemComponent,
    MyAccountComponent,
    ContactComponent,
    NameComponent,
    GratitudeComponent,
    HomeSliderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IonicStorageModule,
  ],
  exports:[
    ItemCardComponent, 
    ItemHorizontalListingComponent,
    CategoryItemComponent,
    CategoryItemListingComponent,
    ItemDetailComponent,
    ItemQuantityComponent,
    CategoryItemDetailComponent,
    ItemCardAddComponent,
    CheckOutFooterComponent,
    CheckOutComponent,
    CheckoutCartItemComponent,
    MyAccountComponent,
    ContactComponent,
    NameComponent,
    GratitudeComponent,
    HomeSliderComponent
  ],
})
export class SharedModule { }
